export default function MultiToggle({ checked, onChange }) {
  return (
    <div className="multi-toggle-box">
      <div className="toggle-text-block">
        <h5>Multiple Selection</h5>
        <p>Allow voters to select more than one choice</p>
      </div>
      <label className="summer-switch" aria-label="Toggle multiple selection">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="summer-slider" />
      </label>
    </div>
  )
}