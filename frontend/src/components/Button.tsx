import React from "react";

interface GenericButtonProps {
  label?: string; // Texto del botón
  onClick: () => void; // Función a ejecutar
  className?: string; // Estilos personalizados
  type?: "button" | "submit" | "reset"; // Tipo de botón (opcional)
  disabled?: boolean; // Estado deshabilitado (opcional)
  icon?: React.ReactNode;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon = null
}) => {
  return (
    <div className="">
      <button
        type={type}
        onClick={onClick}
        className={`p-1 rounded-md inline-flex text-center justify-center font-bold transition-colors cursor-pointer ${className}`}
        disabled={disabled}
      >
        {icon}
        {label}
      </button>
    </div>
  );
};

export default GenericButton;
