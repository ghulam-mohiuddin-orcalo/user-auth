'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// import { useLoginMutation } from '@/features/auth/authApi'; // Adjust import path
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSigninMutation } from '@/redux/services/auth';


interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
  timezone?: string; // Optional timezone field
}

const LoginComponent = () => {
  const [login, { isLoading, error }] = useSigninMutation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log('Form Data:', data);
    try {
      await login({
        email: data.email,
        password: data.password,
        timezone: data.timezone,
      }).unwrap();
      // On successful login, you might redirect or handle success
    } catch (err) {
      // Error is already handled by the mutation
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
            {/* @ts-ignore - RTK Query error handling */}
            {error.data?.message || 'Login failed'}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                {...register('remember')}
              />
            }
            label="Remember me"
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
            }
            label="Show password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Sign In'
            )}
          </Button>

          <Grid container>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                Forgot password?
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} textAlign="right">
              <Box>
                {"Don't have an account? Sign Up"}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginComponent;
