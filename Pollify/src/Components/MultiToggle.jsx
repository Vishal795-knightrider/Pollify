export default function MultiToggle({ checked, onChange }) {
  return (
    <div className="toggle-row">
      <div className="toggle-info">
        <h5>Multiple Selection</h5>
        <p>Allow users to choose more than one answer</p>
      </div>
      <label className="toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider" />
      </label>
    </div>
  )
}