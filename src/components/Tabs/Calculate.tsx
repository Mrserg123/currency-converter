import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface Money {
  money: Record<Currency, string>;
  loading: boolean;
  error: string | null;
}

interface State {
  state?: Money;
}
type Currency = "USD" | "EUR" | "PLN";

function Calculate(props: { currency: Currency }) {
  const [amount, setAmount] = React.useState(0);
  const [isShowCalc, setisShowCalc] = React.useState(false);
  const moneyState: State = useSelector((state) => state);
  let currency: { [index: string]: any } = moneyState.state.money;
  function calcMoney() {
    return (currency[props.currency] * amount).toFixed(2);
  }

  React.useEffect(() => {
    setisShowCalc(false);
  }, [amount]);
  calcMoney();
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
            type="number"
            id="outlined-basic"
            label="Amount(UAH)"
            variant="outlined"
            value={amount !== 0 ? amount : ""}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setisShowCalc(true);
                amount && calcMoney();
              }
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(e.target.value))
            }
          />
          <Button
            sx={{ ml: 3 }}
            variant="contained"
            onClick={() => {
              calcMoney();
              setisShowCalc(true);
            }}
          >
            Calculate
          </Button>
        </Box>
        <div>
          {isShowCalc && (
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                marginTop: "20px",
              }}
            >
              <b>Result:</b> {calcMoney()} {props.currency}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Calculate;
