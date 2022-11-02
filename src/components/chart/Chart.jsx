import React from "react";
import KospiChart from "./KospiChart";
import KosdaqChart from "./KosdaqChart";
import BtiChart from "./BtiChart";
import EthChart from "./EthChart";
import "./Chart.scss";
import UsdkrwChart from "./UsdkrwChart";
import UsdkrwChart1 from "./UsdkrwChart1";
import SP500 from "./SP500";
import SP5001 from "./SP5001";

const Chart = () => {
  return (
    <div className="Chart">
      <div className="Kos">
        <BtiChart className="BtiChart" />
        <EthChart className="EthChart" />
        <KospiChart className="KospiChart" />
        <KosdaqChart className="KosdaqChart" />
      </div>
    </div>
  );
};

export default Chart;
