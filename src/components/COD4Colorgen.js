import React, {Component} from 'react';
import ClipboardJS from "clipboard";
import $ from "jquery";


export default class COD4Colorgen extends Component {

componentDidMount() {
    new ClipboardJS('.btn');

var color = $("#color_input").val();

$("#color_input").change(function () {

    $("#t1").css("color", color);
    $("#t2").css("color", color);
})



$("#gen_btn").click(function () {
    var color = $("#color_input").val();

    var r = round(hexToRGB(color)[0] / 255);
    var g = round(hexToRGB(color)[1] / 255);
    var b = round(hexToRGB(color)[2] / 255);

    var colorCode = "(" + r + ", " + g + ", " + b + ");";
    // eslint-disable-next-line no-useless-concat
    var colorCodeMenu = r + " " + g + " " + b + " " + " 1";


    $("#in1").val(colorCode);
    $("#in2").val("color = " + colorCode);
    $("#in3").val("glowcolor = " + colorCode);
    $("#in4").val(colorCodeMenu);
})

function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    var arr = [
        + r, + g, + b
    ];
    return arr;
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}


}


render() {
    return (
            <div className="container animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-sm-12 text-center mt-4">
            <h5>Call of Duty 4 - Modern Warfare RGB Color Generator</h5>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row px-3">
                  <div className="col-6 p-2 mb-4 text-center" style={{backgroundColor: 'black'}}>
                    <h1 id="t1">COLOR</h1>
                  </div>
                  <div className="col-6 p-2 mb-4 text-center">
                    <h1 id="t2">COLOR</h1>
                  </div>
                </div>
                <div className="form-group">
                  <input type="color"
                        className="outupt form-control"
                        style={{height: '150px'}}
                        id="color_input"
                        defaultValue="#0230ff"
                        />
                </div>
                <button id="gen_btn"
                        className="btn btn-primary btn-block mb-4"
                        style={{marginTop: '10px'}}
                        >Generate</button>
                <p className="mb-3">For GSC/GSX Scripts</p>
                <hr />
                <div className="input-group mb-3">
                  <input type="text" className="outupt form-control" id="in1" aria-describedby="cp1" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success"
                            data-clipboard-target="#in1"
                            id="cp1">
                              Copy
                    </button>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="outupt form-control" id="in2" aria-describedby="cp2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success"
                            data-clipboard-target="#in2"
                            id="cp2">
                              Copy
                    </button>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="outupt form-control" id="in3" aria-describedby="cp3" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success"
                            data-clipboard-action="copy"
                            data-clipboard-target="#in3"
                            id="cp3">
                              Copy
                    </button>
                  </div>
                </div>
                <p className="mb-3">For Menu Scripts or Config</p>
                <hr />
                <div className="input-group mb-3">
                  <input type="text" className="outupt form-control" id="in4" aria-describedby="cp4" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success"
                            data-clipboard-target="#in4"
                            id="cp4">
                              Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-muted my-4">Copyright © <a href="https://tharindujayakody.me">Frames</a></p>
          </div>
        </div>
      </div>
        )
}

}
