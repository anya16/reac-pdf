import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFReader } from "../src/index";


console.log('000000000')
export default class PdfPages extends React.Component {
    render() {
      return (
        <div>
          <PDFReader
            url={
              "https://test1-1300562124.file.myqcloud.com/file/a13c04019f79440faff59cf74dbf56d31583390977114.pdf"
            }
            showAllPage={true}
          />
        </div>
      );
    }
  }

ReactDOM.render(<PdfPages />, document.getElementById("root"));

