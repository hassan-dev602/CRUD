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

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const AddPatient = ({ handleAddSubmit, handleCancelBtn }) => {
  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#f8fafc",
      transition: "all 0.2s ease",

      "& fieldset": {
        borderColor: "#dbe3ee",
      },

      "&:hover fieldset": {
        borderColor: "#2563eb",
      },

      "&.Mui-focused": {
        backgroundColor: "#ffffff",
        boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.12)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#2563eb",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#2563eb",
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
          "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #f1f5f9 100%)",
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
        {/* Top gradient line */}
        <Box
          sx={{
            height: 6,
            background:
              "linear-gradient(90deg, #2563eb 0%, #0ea5e9 55%, #06b6d4 100%)",
          }}
        />

        <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
          {/* Header */}
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
                  "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
              }}
            >
              <AddOutlinedIcon sx={{ fontSize: 34 }} />
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
              Add New Patient
            </Typography>
          </Stack>

          {/* Add patient form */}
          <Box component="form" onSubmit={handleAddSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
                fullWidth
                required
                autoComplete="given-name"
                sx={fieldStyles}
              />

              <TextField
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
                fullWidth
                required
                autoComplete="family-name"
                sx={fieldStyles}
              />

              <TextField
                select
                label="Blood Group"
                name="blood"
                defaultValue=""
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

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ pt: 1 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<AddOutlinedIcon />}
                  sx={{
                    py: 1.3,
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "none",
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                    boxShadow: "0 10px 22px rgba(37, 99, 235, 0.24)",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)",
                      boxShadow: "0 14px 26px rgba(37, 99, 235, 0.3)",
                      transform: "translateY(-1px)",
                    },

                    "&:active": {
                      transform: "translateY(0)",
                    },
                  }}
                >
                  Add Patient
                </Button>

                <Button
                  type="button"
                  variant="outlined"
                  size="large"
                  fullWidth
                  startIcon={<CloseOutlinedIcon />}
                  onClick={handleCancelBtn}
                  sx={{
                    py: 1.3,
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "none",
                    color: "#475569",
                    borderColor: "#cbd5e1",
                    backgroundColor: "#ffffff",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "#dc2626",
                      borderColor: "#fca5a5",
                      backgroundColor: "#fef2f2",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddPatient;