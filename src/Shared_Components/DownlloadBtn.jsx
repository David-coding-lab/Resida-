const DownloadBtn = (props) => {
  if(props.addMargin) {
  return <button className="orange_download_button btnMargin">Download app &rarr;</button>;
  } else
  return <button className="orange_download_button">Download app &rarr;</button>;
};

export default DownloadBtn;
