import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, Link } from "react-router-dom";
import { getCurrency } from "../../redux/actionCreators/getCurrency";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks/hooks";

interface Money {
  money: {};
  loading: boolean;
  error: string | null;
}

interface State {
  state?: Money;
}

const BasicTabs: React.FC = () => {
  const dispatch = useAppDispatch();
  let location = useLocation();
  const moneyState: State = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <>
      {!moneyState.state.loading && (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={location.pathname} aria-label="basic tabs example">
              <Tab
                component={Link}
                label="USD"
                to="/tabs/usd"
                value="/tabs/usd"
              />
              <Tab
                component={Link}
                label="EUR"
                to="/tabs/eur"
                value="/tabs/eur"
              />
              <Tab
                component={Link}
                label="PLN"
                to="/tabs/pln"
                value="/tabs/pln"
              />
            </Tabs>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BasicTabs;
