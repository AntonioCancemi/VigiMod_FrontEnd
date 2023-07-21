import { Legend } from "chart.js";
import { Badge, Col, ProgressBar, Tooltip } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { BiCrown } from "react-icons/bi";
import { BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

function ColumnChart({ categoryAdsCount, all }) {
  const data = Object.keys(categoryAdsCount)
    .map((category) => ({
      name: category,
      adsCount: categoryAdsCount[category],
    }))
    .sort((a, b) => b.adsCount - a.adsCount);
  console.log(data);

  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className="pb-1 border-top border-3">
          <Col className="mb-3 mt-2 fs-4">
            <div className="d-flex align-items-center">
              <Badge
                bg={
                  index == 0 || index == 1 || index == 2
                    ? "success"
                    : "secondary"
                }
              >
                {item.name}
              </Badge>
              {index == 0 || index == 1 || index == 2 ? (
                <BiCrown color="black" />
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col>
            <ProgressBar
              striped
              animated
              variant="info"
              now={(item.adsCount * 100) / all}
              label={`${item.adsCount}`}
            />
          </Col>
        </div>
      ))}
    </>
  );
}
export default ColumnChart;
