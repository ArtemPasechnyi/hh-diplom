import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect } from 'react';
import HighchartsExporting from 'highcharts/modules/exporting';

type ChartProps = {
  options: Highcharts.Options;
};

export const Chart = ({ options }: ChartProps) => {
  useEffect(() => {
    if (typeof Highcharts === 'object') {
      HighchartsExporting(Highcharts);
    }
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
