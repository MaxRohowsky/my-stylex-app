import * as stylex from '@stylexjs/stylex';

// Simple StyleX example
const styles = stylex.create({
  base: {
    fontSize: 100,
    color: 'Blue',
  },
});


export default function Home() {
  return (
    <div {...stylex.props(styles.base)} >
      This text is styled with StyleX
    </div>
  )
}