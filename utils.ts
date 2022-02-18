// Utils
export function getTransformedPoint(x, y, context) {
    const transform = context.getTransform();
    const transformedX = x - transform.e;
    const transformedY = y - transform.f;
    return { x: transformedX, y: transformedY };
}