"use strict";
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.js":
/*!**************************!*\
  !*** ./pages/sign-up.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _media_icons_ospia_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/icons/ospia.svg */ "./media/icons/ospia.svg");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\micae\\OneDrive\\Desktop\\CODE\\root\\next-apollo-materialUI\\next-website\\pages\\sign-up.js",
    _s = $RefreshSig$();














/*
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { StylesContext } from '@material-ui/styles';
*/

/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        OSPIA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */


var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    logo: {
      transform: 'scale(0.5)'
    }
  };
});
function SignUp() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control;
  /* ReCAPTCHA  
  const verifyCallback = function (response) {
    console.log(response);
  };
    const callback = function () {
    console.log('Done!!!!');
  }; 
  */


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__.default, {
    component: "main",
    maxWidth: "xs",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: classes.logo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_media_icons_ospia_svg__WEBPACK_IMPORTED_MODULE_1__.default, {
          alt: "OSPIA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        component: "h1",
        variant: "h5",
        children: "Registro de Usuario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: classes.form,
        noValidate: true,
        onSubmit: handleSubmit(function (data) {
          return alert(JSON.stringify(data));
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
              name: "fname",
              control: control,
              render: function render(_ref) {
                var _ref$field = _ref.field,
                    onChange = _ref$field.onChange,
                    value = _ref$field.value,
                    error = _ref.fieldState.error;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
                  label: "Apellido y Nombre o Raz\xF3n Social",
                  variant: "outlined",
                  value: value,
                  onChange: onChange,
                  error: !!error,
                  fullWidth: true,
                  autoFocus: true,
                  id: "fname",
                  name: "fname",
                  autoComplete: "fname",
                  required: true,
                  helperText: error ? error.message : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'Campo Obligatorio'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
              name: "email",
              control: control,
              render: function render(_ref2) {
                var _ref2$field = _ref2.field,
                    onChange = _ref2$field.onChange,
                    value = _ref2$field.value,
                    error = _ref2.fieldState.error;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
                  variant: "outlined",
                  value: value,
                  onChange: onChange,
                  error: !!error,
                  required: true,
                  fullWidth: true,
                  id: "email",
                  label: "Correo Electr\xF3nico",
                  name: "email",
                  autoComplete: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'El código es obligatorio'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
              name: "password",
              control: control,
              render: function render(_ref3) {
                var _ref3$field = _ref3.field,
                    onChange = _ref3$field.onChange,
                    value = _ref3$field.value,
                    error = _ref3.fieldState.error;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__.default, {
                  variant: "outlined",
                  value: value,
                  onChange: onChange,
                  error: !!error,
                  required: true,
                  fullWidth: true,
                  name: "password",
                  label: "Contrase\xF1a",
                  type: "password",
                  id: "password",
                  autoComplete: "current-password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'El código es obligatorio'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__.default, {
              sitekey: "6LfG3FkcAAAAAG-ijamNanUtajZwipn_6ACldiIz",
              render: "explicit"
              /* verifyCallback={verifyCallback}
              onloadCallback={callback} */

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
          type: "submit",
          fullWidth: true,
          variant: "contained",
          color: "primary",
          className: classes.submit,
          children: "Registrarme"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
          container: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            xs: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__.default, {
              href: "#",
              variant: "body2",
              children: "Recuperar mi contrase\xF1a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
            item: true,
            children: ["Ya tengo cuenta.\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_12__.default, {
              href: "#",
              variant: "body2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
                children: "Iniciar Sesi\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

_s(SignUp, "pu5/i7FqewIPn+OvkIk7T72M7bs=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm];
});

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC42ZTI0NjkyZmUxY2NmZWQ0NzdhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWUsU0FBUyxHQUFHTixvRUFBVSxDQUFDLFVBQUNPLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsU0FBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFTEMsTUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsTUFBQUEsYUFBYSxFQUFFLFFBSFY7QUFJTEMsTUFBQUEsVUFBVSxFQUFFO0FBSlAsS0FEZ0M7QUFRdkNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsTUFESDtBQUNXO0FBQ2ZOLE1BQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZQLEtBUmlDO0FBYXZDTSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsTUFBTSxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBREYsS0FiK0I7QUFpQnZDUSxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsU0FBUyxFQUFFO0FBRFA7QUFqQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBdUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFL0IsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCOztBQUNBLGlCQUE0Q0Ysd0RBQU8sRUFBbkQ7QUFB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LGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvSUQ7O0dBbEp1Qkk7VUFFTmQsV0FDNEJGOzs7S0FIdEJnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLXVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9tZWRpYS9pY29ucy9vc3BpYS5zdmdcIjtcclxuaW1wb3J0IFJlQ0FQVENIQSBmcm9tICdyZWFjdC1nb29nbGUtcmVjYXB0Y2hhJztcclxuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcblxyXG4vKlxyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG4qL1xyXG5cclxuLyogZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgT1NQSUFcclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufSAqL1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcblxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gIH0sXHJcblxyXG4gIGxvZ286IHtcclxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknLFxyXG4gIH1cclxuXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgY29udHJvbCB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICAvKiBSZUNBUFRDSEEgIFxyXG4gIGNvbnN0IHZlcmlmeUNhbGxiYWNrID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRG9uZSEhISEnKTtcclxuICB9OyBcclxuICAqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgey8qIENoZWNrIExvZ28gQW5pbWF0aW9uIG9uIFNjcm9sbCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cclxuICAgICAgICAgIDxMb2dvIGFsdD1cIk9TUElBXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIFJlZ2lzdHJvIGRlIFVzdWFyaW9cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoKGRhdGEpID0+IGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKSl9PlxyXG5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCB2YWx1ZSB9LCBmaWVsZFN0YXRlOiB7IGVycm9yIH0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBcGVsbGlkbyB5IE5vbWJyZSBvIFJhesOzbiBTb2NpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0NhbXBvIE9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCB2YWx1ZSB9LCBmaWVsZFN0YXRlOiB7IGVycm9yIH0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3JyZW8gRWxlY3Ryw7NuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiAnRWwgY8OzZGlnbyBlcyBvYmxpZ2F0b3JpbycgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgdmFsdWUgfSwgZmllbGRTdGF0ZTogeyBlcnJvciB9IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiAnRWwgY8OzZGlnbyBlcyBvYmxpZ2F0b3JpbycgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFJlQ0FQVENIQVxyXG4gICAgICAgICAgICAgICAgc2l0ZWtleT1cIjZMZkczRmtjQUFBQUFHLWlqYW1OYW5VdGFqWndpcG5fNkFDbGRpSXpcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPVwiZXhwbGljaXRcIlxyXG4gICAgICAgICAgICAgIC8qIHZlcmlmeUNhbGxiYWNrPXt2ZXJpZnlDYWxsYmFja31cclxuICAgICAgICAgICAgICBvbmxvYWRDYWxsYmFjaz17Y2FsbGJhY2t9ICovXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdHJhcm1lXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIFJlY3VwZXJhciBtaSBjb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIFlhIHRlbmdvIGN1ZW50YS4mbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5JbmljaWFyIFNlc2nDs248L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8Qm94IG10PXs1fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PiAqL31cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJDc3NCYXNlbGluZSIsIlRleHRGaWVsZCIsIkxpbmsiLCJHcmlkIiwiQm94IiwiVHlwb2dyYXBoeSIsIm1ha2VTdHlsZXMiLCJDb250YWluZXIiLCJMb2dvIiwiUmVDQVBUQ0hBIiwidXNlRm9ybSIsIkNvbnRyb2xsZXIiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsIm1hcmdpbiIsImxvZ28iLCJ0cmFuc2Zvcm0iLCJTaWduVXAiLCJjbGFzc2VzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZGF0YSIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpZWxkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImVycm9yIiwiZmllbGRTdGF0ZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=