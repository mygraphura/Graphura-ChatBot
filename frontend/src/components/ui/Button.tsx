import React from 'react';

// Simplified button variants without external dependencies
const getButtonClasses = (variant: string = 'primary', size: string = 'medium') => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants: Record<string, string> = {
    primary: 'hover:opacity-90 focus:ring-orange-500',
    secondary: 'bg-secondary-background-gray text-button-text-secondary hover:bg-opacity-90 focus:ring-gray-500',
    outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-orange-500',
    default: 'hover:opacity-90 focus:ring-orange-500',
  };

  const sizes: Record<string, string> = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
    md: 'text-base px-4 py-2',
  };

  return `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.medium}`;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  border_border_image?: string;
  effect_box_shadow?: string;
  layout_align_self?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  layout_gap?: string;
  variant?: string;
  size?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  // Required parameters with defaults
  text = "Get Started",
  text_font_size = "text-lg",
  text_font_family = "Inter",
  text_font_weight = "font-extrabold",
  text_line_height = "leading-xl",
  text_text_align = "left",
  text_color = "text-button-text-primary",
  fill_background_color = "bg-button-bg-dark",
  border_border = "1px solid #ffffff66",
  border_border_radius = "rounded-7xl",
  
  // Optional parameters (no defaults)
  border_border_image,
  effect_box_shadow,
  layout_align_self,
  layout_width,
  padding,
  margin,
  position,
  layout_gap,
  
  // Standard React props
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = "",
  children,
  onClick,
  type = "button",
  ...props
}, ref) => {

  // Parse border from string format
  const parseBorder = (borderString?: string) => {
    if (!borderString) return '';
    const parts = borderString.split(' ');
    if (parts.length >= 3) {
      const width = parts[0];
      const style = parts[1];
      const color = parts.slice(2).join(' ');
      return `border-[${width}px] border-${style} border-[${color}]`;
    }
    return '';
  };

  // Safe validation and Tailwind construction
  const optionalClasses = [
    layout_align_self ? `self-${layout_align_self}` : '',
    layout_width ? `w-[${layout_width}]` : '',
    padding ? `p-[${padding}]` : '',
    margin ? `m-[${margin}]` : '',
    position ? position : '',
    layout_gap ? `gap-[${layout_gap}]` : '',
    effect_box_shadow ? `shadow-[${effect_box_shadow}]` : '',
  ].filter(Boolean).join(' ');

  const requiredStyles = [
    text_font_size,
    text_font_family ? `font-[${text_font_family}]` : '',
    text_font_weight,
    text_line_height,
    text_text_align ? `text-${text_text_align}` : '',
    text_color,
    fill_background_color,
    parseBorder(border_border),
    border_border_radius,
  ].filter(Boolean).join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const combinedClasses = `${getButtonClasses(variant, size)} ${requiredStyles} ${optionalClasses} ${className}`.trim();

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={combinedClasses}
      style={border_border_image ? { borderImage: border_border_image } : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
