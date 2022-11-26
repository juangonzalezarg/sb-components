/// <reference types="react" />
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
    /**
    * Colores personalizados del fondo de la etiqueta
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
