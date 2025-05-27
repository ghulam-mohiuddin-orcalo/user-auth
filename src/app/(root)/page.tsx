import CounterButton from "@/components/CounterButton";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Typography>
        Welcome to <Link href="https://mui.com/toolpad/core/introduction">Toolpad Core!</Link>
      </Typography>

      <CounterButton />
    </Box>
  );
}
