import { loadCodePreviewSettings, withCodePreviewShell } from "pi-code-previews";

let settingsPromise: Promise<void> | undefined;

export function loadCodePreviewSettingsOnce(): Promise<void> {
	settingsPromise ??= loadCodePreviewSettings().then(
		() => undefined,
		(error) => {
			settingsPromise = undefined;
			throw error;
		},
	);
	return settingsPromise;
}

export { withCodePreviewShell };
