export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];

  return {
    id,
    alt: media.title.rendered,
    src: media.source_url,
  };
}
