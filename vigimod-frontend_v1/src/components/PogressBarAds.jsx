import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarAds({ acc, rej, pen, all, sus }) {
  return (
    <ProgressBar animated style={{ height: 50 }} className="text-">
      <ProgressBar
        striped
        animated
        variant="success"
        now={(acc * 100) / all}
        label={"ACC"}
        key={1}
      />
      <ProgressBar
        animated
        striped
        variant="danger"
        now={(rej * 100) / all}
        label={"REJ"}
        key={2}
      />
      <ProgressBar
        animated
        striped
        variant="dark"
        now={(sus * 100) / all}
        label={"SUS"}
        key={3}
      />
      <ProgressBar
        striped
        animated
        variant="warning"
        now={(pen * 100) / all}
        label={"PEN"}
        key={4}
      />
    </ProgressBar>
  );
}

export default ProgressBarAds;
