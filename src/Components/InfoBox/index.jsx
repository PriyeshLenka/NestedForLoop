/* eslint-disable react/prop-types */
import React from 'react';

const InfoBox = (props) => {
  const { config, details } = props;
  return (
    <>
      <div className="info-box">
        <div className="info-content-box .ring-gray-300">
          <h3 className="text-base font-semibold leading-7 text-gray-900 py-2">
            {config.heading}
          </h3>
          <div className="info-details">
            {details &&
              details?.map((detail) => (
                <div className="details-section" key={detail.key}>
                  <h4 className="text-sm leading-7 text-gray-900 py-1">
                    {detail?.info}
                  </h4>
                  <h4 className="text-sm leading-7 text-gray-900 py-1">
                    {detail?.count}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
