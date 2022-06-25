import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface Money {
  money: { USD: string; EUR: string; PLN: string };
  loading: boolean;
  error: string | null;
}

interface State {
  state?: Money;
}

function Calculate(props: { currency: string }) {
  const [amount, setAmount] = React.useState("");
  const [resultCalc, setResultCalc] = React.useState(0);
  const moneyState: State = useSelector((state) => state);
  let currency: { [index: string]: any } = moneyState.state.money;
  let location = useLocation();

  function calcMoney() {
    if (!amount) return false;
    let resultCalc = currency[props.currency] * Number(amount);
    return setResultCalc(resultCalc);
  }
  React.useEffect(() => {
    setResultCalc(0);
    calcMoney();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="md">
        <Typography
          variant="h6"
          color="inherit"
          sx={{ textAlign: "center", mb: 1 }}
        >
          1 UAH = {currency[props.currency]} {props.currency}
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          sx={{ textAlign: "center", mb: 1 }}
        >
          Enter the amount to convert to {props.currency}
        </Typography>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Amount(UAH)"
            variant="outlined"
            value={amount}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                calcMoney();
              }
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            onClick={() => calcMoney()}
          >
            Calculate
          </Button>
        </Box>
        <div>
          {resultCalc !== 0 && (
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              <b>Result:</b> {resultCalc.toFixed(3)} ({props.currency})
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
export default Calculate;
