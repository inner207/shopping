import styles from './QuantityStepper.module.css';

export function QuantityStepper({ value, onChange, label }: { value: number; onChange: (value: number) => void; label: string }) {
  return <div className={styles.stepper} role="group" aria-label={`${label}的数量`}>
    <button type="button" aria-label={`减少${label}的数量`} disabled={value <= 1} onClick={() => onChange(value - 1)}>−</button>
    <output aria-label="数量">{value}</output>
    <button type="button" aria-label={`增加${label}的数量`} disabled={value >= 99} onClick={() => onChange(value + 1)}>+</button>
  </div>;
}
