import "@testing-library/jest-dom/extend-expect";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
