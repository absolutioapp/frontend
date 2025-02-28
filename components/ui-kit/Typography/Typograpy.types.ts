interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline';
    color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
    align?: 'left' | 'center' | 'right' | 'justify';
    gutterBottom?: boolean;
    paragraph?: boolean;
    noWrap?: boolean;
    inline?: boolean;
    children: React.ReactNode;
}