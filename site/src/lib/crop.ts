// Converts a point on the source photo (0..1 fractions) into % of a box that shows the photo with object-fit: cover.
export interface Crop { aspect: number; ox?: number; oy?: number; }
export function coverPoint(x: number, y: number, imageAspect: number, crop: Crop): { x: number; y: number } {
  const ox = crop.ox ?? 0.5;
  const oy = crop.oy ?? 0.5;
  if (crop.aspect >= imageAspect) {
    const vis = imageAspect / crop.aspect;
    const off = (1 - vis) * oy;
    return { x: x * 100, y: ((y - off) / vis) * 100 };
  }
  const vis = crop.aspect / imageAspect;
  const off = (1 - vis) * ox;
  return { x: ((x - off) / vis) * 100, y: y * 100 };
}
