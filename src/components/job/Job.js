import "./Job.css";

import { calculateTimeDifference, getHostName } from "../../utils/common-utils";

export const Job = ({ job, index }) => {
  return (
    <div key={job.id} className="job">
      <div className="job-index-container">
        <span className="job-index"> {index + 1}. </span>
      </div>
      <div className="job-details">
        <div className="job-title">
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            {job.title}
          </a>
          <span className="job-host-name" onClick={() => window.open(job.url)}>
            {" "}
            ({getHostName(job.url)})
          </span>
        </div>
        <div className="job-metadata">
          <span>{calculateTimeDifference(job.time)}</span>
        </div>
      </div>
    </div>
  );
};
