import React from 'react';
import withToggle from './hocs/withToggle'; // HOC para Toggle
import Toggle from './components/Toggle'; // Render Props para Toggle
import withTooltip from './hocs/withTooltip'; // HOC para Tooltip
import Tooltip from './components/Tooltip'; // Render Props para Tooltip

const App = () => {
  const ToggleWithHOC = withToggle(Toggle);
  const TooltipWithHOC = withTooltip(Tooltip, 'Mensaje de información');

  return (
    <div>
      <h1>Composición de Componentes</h1>

      {/* Toggle con HOC */}
      <ToggleWithHOC>
        {({ isVisible, toggleVisibility }) => (
          <div>
            <button onClick={toggleVisibility}>
              {isVisible ? 'Ocultar contenido' : 'Mostrar contenido'}
            </button>
            {isVisible && <p>Este es el contenido alternado con HOC</p>}
          </div>
        )}
      </ToggleWithHOC>

      {/* Toggle con Render Props */}
      <Toggle>
        {({ isVisible, toggleVisibility }) => (
          <div>
            <button onClick={toggleVisibility}>
              {isVisible ? 'Ocultar contenido' : 'Mostrar contenido'}
            </button>
            {isVisible && <p>Este es el contenido alternado con Render Props</p>}
          </div>
        )}
      </Toggle>

      {/* Tooltip con HOC */}
      <TooltipWithHOC>
        <button>Hover sobre mí (HOC)</button>
      </TooltipWithHOC>

      {/* Tooltip con Render Props */}
      <Tooltip text="Mensaje de información (Render Props)">
        <button>Hover sobre mí (Render Props)</button>
      </Tooltip>
    </div>
  );
};

export default App;