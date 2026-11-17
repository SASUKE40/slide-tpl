// @unocss/preset-icons skips its local icon loader when VSCODE_CWD is set, which
// VS Code and Cursor terminals do. Slidev's toolbar icons then render empty.
delete process.env.VSCODE_CWD

export default {}
