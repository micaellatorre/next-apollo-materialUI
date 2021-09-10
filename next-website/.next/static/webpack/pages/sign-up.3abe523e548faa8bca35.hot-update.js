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
                  name: "fname",
                  autocomplete: "name",
                  required: true
                  /* helperText={error ? error.message : null} */

                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'El código es obligatorio'
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
                  lineNumber: 117,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'El código es obligatorio'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
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
                  lineNumber: 140,
                  columnNumber: 19
                }, _this);
              },
              rules: {
                required: 'El código es obligatorio'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
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
              lineNumber: 160,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
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
          lineNumber: 170,
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
              lineNumber: 182,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
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
                lineNumber: 189,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC4zYWJlNTIzZTU0OGZhYThiY2EzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWUsU0FBUyxHQUFHTixvRUFBVSxDQUFDLFVBQUNPLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsU0FBUyxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFTEMsTUFBQUEsT0FBTyxFQUFFLE1BRko7QUFHTEMsTUFBQUEsYUFBYSxFQUFFLFFBSFY7QUFJTEMsTUFBQUEsVUFBVSxFQUFFO0FBSlAsS0FEZ0M7QUFRdkNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUUsTUFESDtBQUNXO0FBQ2ZOLE1BQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUZQLEtBUmlDO0FBYXZDTSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsTUFBTSxFQUFFVixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBREYsS0FiK0I7QUFpQnZDUSxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsU0FBUyxFQUFFO0FBRFA7QUFqQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBdUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFFL0IsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCOztBQUNBLGlCQUE0Q0Ysd0RBQU8sRUFBbkQ7QUFB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OztHQWpKdUJJO1VBRU5kLFdBQzRCRjs7O0tBSHRCZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbi11cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vbWVkaWEvaWNvbnMvb3NwaWEuc3ZnXCI7XHJcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSAncmVhY3QtZ29vZ2xlLXJlY2FwdGNoYSc7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxuLypcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XHJcbmltcG9ydCB7IFN0eWxlc0NvbnRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuKi9cclxuXHJcbi8qIGZ1bmN0aW9uIENvcHlyaWdodCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgeydDb3B5cmlnaHQgwqkgJ31cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIE9TUElBXHJcbiAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7Jy4nfVxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICk7XHJcbn0gKi9cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG5cclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJyxcclxuICB9XHJcblxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGNvbnRyb2wgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgLyogUmVDQVBUQ0hBICBcclxuICBjb25zdCB2ZXJpZnlDYWxsYmFjayA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RvbmUhISEhJyk7XHJcbiAgfTsgXHJcbiAgKi9cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIHsvKiBDaGVjayBMb2dvIEFuaW1hdGlvbiBvbiBTY3JvbGwgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICA8TG9nbyBhbHQ9XCJPU1BJQVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBSZWdpc3RybyBkZSBVc3VhcmlvXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KChkYXRhKSA9PiBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSkpfT5cclxuXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgdmFsdWUgfSwgZmllbGRTdGF0ZTogeyBlcnJvciB9IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXBlbGxpZG8geSBOb21icmUgbyBSYXrDs24gU29jaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IG51bGx9ICovXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogJ0VsIGPDs2RpZ28gZXMgb2JsaWdhdG9yaW8nIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHZhbHVlIH0sIGZpZWxkU3RhdGU6IHsgZXJyb3IgfSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvcnJlbyBFbGVjdHLDs25pY29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFbCBjw7NkaWdvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCB2YWx1ZSB9LCBmaWVsZFN0YXRlOiB7IGVycm9yIH0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6ICdFbCBjw7NkaWdvIGVzIG9ibGlnYXRvcmlvJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8UmVDQVBUQ0hBXHJcbiAgICAgICAgICAgICAgICBzaXRla2V5PVwiNkxmRzNGa2NBQUFBQUctaWphbU5hblV0YWpad2lwbl82QUNsZGlJelwiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9XCJleHBsaWNpdFwiXHJcbiAgICAgICAgICAgICAgLyogdmVyaWZ5Q2FsbGJhY2s9e3ZlcmlmeUNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgIG9ubG9hZENhbGxiYWNrPXtjYWxsYmFja30gKi9cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0cmFybWVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgUmVjdXBlcmFyIG1pIGNvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgWWEgdGVuZ28gY3VlbnRhLiZuYnNwO1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkluaWNpYXIgU2VzacOzbjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxCb3ggbXQ9ezV9PlxyXG4gICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgPC9Cb3g+ICovfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkNzc0Jhc2VsaW5lIiwiVGV4dEZpZWxkIiwiTGluayIsIkdyaWQiLCJCb3giLCJUeXBvZ3JhcGh5IiwibWFrZVN0eWxlcyIsIkNvbnRhaW5lciIsIkxvZ28iLCJSZUNBUFRDSEEiLCJ1c2VGb3JtIiwiQ29udHJvbGxlciIsInVzZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZm9ybSIsIndpZHRoIiwic3VibWl0IiwibWFyZ2luIiwibG9nbyIsInRyYW5zZm9ybSIsIlNpZ25VcCIsImNsYXNzZXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmllbGQiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3IiLCJmaWVsZFN0YXRlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9