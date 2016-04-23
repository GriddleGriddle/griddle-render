export function getStyleProperties(props, sectionName) {
  const className = (props && props.styles && props.styles.getClassName) ?
      props.styles.getClassName({
        section: sectionName,
        classNames: props.styles.classNames,
        useClassNames: props.settings.useGriddleClassNames
    }) :
    null;

  const style = (props && props.styles && props.styles.getStyle) ?
    props.styles.getStyle({
        styles: props.styles.inlineStyles,
        styleName: sectionName,
        ...props.style
    }) :
    null;

  return { className, style }
}
