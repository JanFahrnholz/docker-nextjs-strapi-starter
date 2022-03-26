export default interface GrapgQlData<attributes, meta = {}> {
    id: number;
    attributes: attributes;
    meta?: meta;
}
