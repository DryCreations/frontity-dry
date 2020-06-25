export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];

  const srcSet =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;


  return {
    id,
    alt: media.title.rendered,
    src: media.source_url,
    srcSet
  };
}
