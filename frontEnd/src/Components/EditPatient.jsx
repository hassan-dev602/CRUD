import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const EditPatient = ({ handleEditSubmit, selectedEditData }) => {
  if (!selectedEditData) {
    return null;
  }

  const {
    first_name = "",
    last_name = "",
    blood = "",
  } = selectedEditData;

  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#f8fafc",
      transition: "all 0.2s ease",

      "& fieldset": {
        borderColor: "#dbe3ee",
      },

      "&:hover fieldset": {
        borderColor: "#f59e0b",
      },

      "&.Mui-focused": {
        backgroundColor: "#ffffff",
        boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.12)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#f59e0b",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#d97706",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        boxSizing: "border-box",
        px: { xs: 1.5, sm: 3 },
        pt: { xs: 2, sm: 3 },
        pb: 4,
        background:
          "linear-gradient(135deg, #f8fafc 0%, #fff7ed 50%, #f1f5f9 100%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 540,
          overflow: "hidden",
          borderRadius: { xs: 3, sm: 4 },
          border: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          boxShadow:
            "0 20px 50px rgba(15, 23, 42, 0.10), 0 4px 12px rgba(15, 23, 42, 0.05)",
        }}
      >
        <Box
          sx={{
            height: 6,
            background:
              "linear-gradient(90deg, #f59e0b 0%, #f97316 55%, #ef4444 100%)",
          }}
        />

        <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
          <Stack alignItems="center" spacing={1.2} mb={3.5}>
            <Box
              sx={{
                width: 62,
                height: 62,
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                boxShadow: "0 10px 24px rgba(249, 115, 22, 0.28)",
              }}
            >
              <EditOutlinedIcon sx={{ fontSize: 30 }} />
            </Box>

            <Typography
              component="h2"
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#0f172a",
                textAlign: "center",
                letterSpacing: "-0.5px",
              }}
            >
              Edit Patient
            </Typography>
          </Stack>

          <Box component="form" onSubmit={handleEditSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="First Name"
                name="first_name"
                defaultValue={first_name}
                fullWidth
                required
                autoComplete="given-name"
                sx={fieldStyles}
              />

              <TextField
                label="Last Name"
                name="last_name"
                defaultValue={last_name}
                fullWidth
                required
                autoComplete="family-name"
                sx={fieldStyles}
              />

              <TextField
                select
                label="Blood Group"
                name="blood"
                defaultValue={blood}
                fullWidth
                required
                sx={fieldStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BloodtypeOutlinedIcon
                        sx={{
                          color: "#ef4444",
                          fontSize: 23,
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="" disabled>
                  Select Blood Group
                </MenuItem>

                {bloodGroups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </TextField>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                startIcon={<SaveOutlinedIcon />}
                sx={{
                  mt: 1,
                  py: 1.35,
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textTransform: "none",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                  boxShadow: "0 10px 22px rgba(249, 115, 22, 0.25)",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #d97706 0%, #ea580c 100%)",
                    boxShadow: "0 14px 26px rgba(249, 115, 22, 0.32)",
                    transform: "translateY(-1px)",
                  },

                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Update Patient
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditPatient;