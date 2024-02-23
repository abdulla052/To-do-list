import { useState } from "react";
import style from "./colorPicker.module.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#8a2be2");

  function handleColorChange(e) {
    setColor(e.target.value);

    console.log(e);
  }

  return (
    <>
      <div className={style.palete}>
        <div className={style.box} style={{ backgroundColor: color }}>
          <p
            className={style.value}
            style={{ color: color === "#ffffff" && "#000000" }}
          >
            {color}
          </p>
        </div>

        <h4 className={style.label}>Select a Color: </h4>

        <input
          className={style.colorPicker}
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </>
  );
};

export default ColorPicker;
