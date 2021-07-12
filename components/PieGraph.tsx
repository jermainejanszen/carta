import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

interface Props {
  data : any[],
  width? : number,
  height? : number,
  innerRadius? : number,
  outerRadius? : number,
  paddingAngle? : number,
  nameKey? : string,
  dataKey? : string,
  label? : boolean,
}

const secondsToHours = (time : number) : string => {
  const hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60).toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  let seconds = Math.floor((time % 3600) % 60).toString();
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
}

const PieGraph = (props: Props) => {

  const onPieEnter = () => {};
  const COLORS = ["#BAE7ED", "#B0FF94", "#638695", "#F98E8E"];

  const width : number = props.width ? props.width : 200;
  const height : number = props.height ? props.height : 200;
  const innerRadius : number = props.innerRadius ? props.innerRadius : width / 4;
  const outerRadius : number = props.outerRadius ? props.outerRadius : innerRadius + 30;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        width={width}
        height={height}
        onMouseEnter={onPieEnter}>
          <Pie
            data={props.data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={props.paddingAngle ? props.paddingAngle : 0}
            fill={COLORS[0]}
            nameKey={props.nameKey ? props.nameKey : "name"}
            dataKey={props.dataKey ? props.dataKey : "value"}
            label={props.label ? renderCustomizedLabel : false}
            labelLine={false} >
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => {
              return secondsToHours(value);
            }} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieGraph;
