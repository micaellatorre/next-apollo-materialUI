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
                  autoComplete: "email",
                  helperText: error ? error.message : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'Campo Obligatorio. Del formato juanperez@email.com'
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
                  autoComplete: "current-password",
                  helperText: error ? error.message : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'Campo Obligatorio. Ingresar entre 8 y 12 caracteres. Debe contener al menos un número, una letra, una minúscula y una mayúscula.'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
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
              lineNumber: 163,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
          lineNumber: 173,
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
              lineNumber: 185,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
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
                lineNumber: 192,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC43MmQ3ODkxMWQ5NGFhZjM3OTJlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWUsU0FBUyxHQUFHTixvRUFBVSxDQUFDLFVBQUNPLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsU0FBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFTEMsTUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsTUFBQUEsYUFBYSxFQUFFLFFBSFY7QUFJTEMsTUFBQUEsVUFBVSxFQUFFO0FBSlAsS0FEZ0M7QUFRdkNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsTUFESDtBQUNXO0FBQ2ZOLE1BQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZQLEtBUmlDO0FBYXZDTSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsTUFBTSxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBREYsS0FiK0I7QUFpQnZDUSxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsU0FBUyxFQUFFO0FBRFA7QUFqQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBdUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFL0IsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCOztBQUNBLGlCQUE0Q0Ysd0RBQU8sRUFBbkQ7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5HRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNJRDs7R0FwSnVCSTtVQUVOZCxXQUM0QkY7OztLQUh0QmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ24tdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL21lZGlhL2ljb25zL29zcGlhLnN2Z1wiO1xyXG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gJ3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEnO1xyXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbi8qXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbiovXHJcblxyXG4vKiBmdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICBPU1BJQVxyXG4gICAgICA8L0xpbms+eycgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59ICovXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG5cclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxuXHJcbiAgbG9nbzoge1xyXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC41KScsXHJcbiAgfVxyXG5cclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBjb250cm9sIH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gIC8qIFJlQ0FQVENIQSAgXHJcbiAgY29uc3QgdmVyaWZ5Q2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdEb25lISEhIScpO1xyXG4gIH07IFxyXG4gICovXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICB7LyogQ2hlY2sgTG9nbyBBbmltYXRpb24gb24gU2Nyb2xsICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICAgICAgPExvZ28gYWx0PVwiT1NQSUFcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgUmVnaXN0cm8gZGUgVXN1YXJpb1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGUgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgoZGF0YSkgPT4gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKX0+XHJcblxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHZhbHVlIH0sIGZpZWxkU3RhdGU6IHsgZXJyb3IgfSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFwZWxsaWRvIHkgTm9tYnJlIG8gUmF6w7NuIFNvY2lhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiAnQ2FtcG8gT2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHZhbHVlIH0sIGZpZWxkU3RhdGU6IHsgZXJyb3IgfSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvcnJlbyBFbGVjdHLDs25pY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0NhbXBvIE9ibGlnYXRvcmlvLiBEZWwgZm9ybWF0byBqdWFucGVyZXpAZW1haWwuY29tJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCB2YWx1ZSB9LCBmaWVsZFN0YXRlOiB7IGVycm9yIH0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0NhbXBvIE9ibGlnYXRvcmlvLiBJbmdyZXNhciBlbnRyZSA4IHkgMTIgY2FyYWN0ZXJlcy4gRGViZSBjb250ZW5lciBhbCBtZW5vcyB1biBuw7ptZXJvLCB1bmEgbGV0cmEsIHVuYSBtaW7DunNjdWxhIHkgdW5hIG1hecO6c2N1bGEuJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVDQVBUQ0hBXHJcbiAgICAgICAgICAgICAgICBzaXRla2V5PVwiNkxmRzNGa2NBQUFBQUctaWphbU5hblV0YWpad2lwbl82QUNsZGlJelwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9XCJleHBsaWNpdFwiXHJcbiAgICAgICAgICAgICAgLyogdmVyaWZ5Q2FsbGJhY2s9e3ZlcmlmeUNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrPXtjYWxsYmFja30gKi9cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0cmFybWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgUmVjdXBlcmFyIG1pIGNvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgWWEgdGVuZ28gY3VlbnRhLiZuYnNwO1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkluaWNpYXIgU2VzacOzbjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxCb3ggbXQ9ezV9PlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9Cb3g+ICovfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiTGluayIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwibWFrZVN0eWxlcyIsIkNvbnRhaW5lciIsIkxvZ28iLCJSZUNBUFRDSEEiLCJ1c2VGb3JtIiwiQ29udHJvbGxlciIsInVzZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZm9ybSIsIndpZHRoIiwic3VibWl0IiwibWFyZ2luIiwibG9nbyIsInRyYW5zZm9ybSIsIlNpZ25VcCIsImNsYXNzZXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmllbGQiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3IiLCJmaWVsZFN0YXRlIiwibWVzc2FnZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==