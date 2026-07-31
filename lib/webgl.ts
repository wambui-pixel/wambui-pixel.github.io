let cachedSupport: boolean | undefined;

export function getWebGLSupport(): boolean {
  if (cachedSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      cachedSupport = !!(
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
      );
    } catch {
      cachedSupport = false;
    }
  }
  return cachedSupport;
}
