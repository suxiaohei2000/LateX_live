/**
 * @Copyright Copyright © 2022
 * @Createdon 2022-6-12
 * @Author Panda_YueTao
 * @Version 1.6.4
 * @Title 妈叔出品-LaTeX公式编辑器脚本
 */

import "./css/rem.css";
import "./css/style.css";
import "./css/navbar.css";
import "./css/checkbox.css";
import "./css/radiobutton.css";
import "./css/latex.css";
import "./css/abouttheme.css";
import "./css/footer.css";

import { action } from "./js/action.js";
import { autocomplete } from "./js/autocomplete.js";
import { common } from "./js/common.js";
import { Eject } from "./common/eject.js";
import { element } from "./js/element.js";
import { flat } from "./js/flat.js";
import { highlight } from "./js/highlight.js";
import { immediate } from "./js/immediate.js";
import { input } from "./js/input.js";
import { mapjson } from "./js/mapjson.js";
import { mathjaxCore } from "./js/mathjaxCore.js";
import { mathpix } from "./js/mathpix.js";
import { output } from "./js/output.js";
import { setting } from "./js/setting.js";
import { shareurl } from "./js/shareurl.js";
import { shortcut } from "./js/shortcut.js";
import { theme } from "./js/theme.js";
import { LoadComplete } from "./common/item.js";
import { notify } from "./common/notify.js";

class GolbalOption {
  constructor() {
    GolbalOption.prototype.const_boot = Config[Environment].Boot_OSS;
    GolbalOption.prototype.const_hostName = Config[Environment].Hostname;
    GolbalOption.prototype.obj_autocomplete = autocomplete;
    GolbalOption.prototype.obj_common = common;
    GolbalOption.prototype.obj_eject = new Eject();
    GolbalOption.prototype.obj_element = element;
    GolbalOption.prototype.obj_flat = flat;
    GolbalOption.prototype.obj_highlight = highlight;
    GolbalOption.prototype.obj_input = input;
    GolbalOption.prototype.obj_mathjaxCore = mathjaxCore;
    GolbalOption.prototype.obj_mathpix = mathpix;
    GolbalOption.prototype.obj_output = output;
    GolbalOption.prototype.obj_setting = setting;
    GolbalOption.prototype.obj_theme = theme;
    GolbalOption.prototype.fn_refresh = function () {
      highlight.textareaToDiv();
      output.render();
      theme.setMathJax();
    };
  }
}
var latex_opt = new GolbalOption();

var init_latex = function (opt) {
  mapjson.init(opt).then(function (data) {
    GolbalOption.prototype.map_all = data;
    setting.init(opt);
    theme.init(opt);
    input.init(opt);
    shortcut.init(opt);
    mathpix.init(opt);
    immediate.init(opt);
    action.init(opt);
    highlight.init(opt);
    autocomplete.init(opt);
    flat.init(opt);
    common.init(opt);
    notify.init();
    mathjaxCore.init(opt).then(function () {
      output.init(opt);
      shareurl.init(opt);
      LoadComplete.closeLoadingMask();
    });
  });
};

$(function () {
  init_latex(latex_opt);
});
