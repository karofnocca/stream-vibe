import postcssPxToRem from "postcss-pxtorem"
import postsccPresetEnv from "postcss-preset-env"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ["*"],
        mediaQuery: true,
      })
    )

    plugins.push(postsccPresetEnv())
  }

  return {
    plugins,
  }
}
