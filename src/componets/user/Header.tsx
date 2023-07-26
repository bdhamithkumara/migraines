import * as React from "react";
import { Button, Grid } from "@mui/material";
import AvatarComponent from "../Avatar";
import { useAuthContext } from "@/app/context";
import { useRouter } from "next/navigation";
import supabase from "../../../supabase";

export default function UserHeader() {
  const router = useRouter();
  const { user } = useAuthContext();
  const logout = () => {
    supabase.auth.signOut();
    router.push("/");
  };
  return (
    <Grid sx={{ my: 6 }} container alignItems="center">
      <Grid item sx={{ mr: 4 }}>
        <AvatarComponent size={"big"} />
      </Grid>
      {user && (
        <Grid item>
          <h1>{user.email}</h1>
          <p style={{ marginBottom: "12px" }}>{user.email}</p>
          <Button             className="info"
            variant="outlined" onClick={logout}>
            Signout
          </Button>
        </Grid>
      )}
    </Grid>
  );
}