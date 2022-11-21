import './mylabel.css';

export interface MyLabelProps {
  /**
  * Este es el mensaje que se va a mostrar en la etiqueta
  */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
  * Capitalizar toda la palabra
  */
  allCaps?: boolean;
  /**
  * Colores básicos de la etiqueta
  */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
  * Colores personalizados de la etiqueta
  */
   fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  fontColor,
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
