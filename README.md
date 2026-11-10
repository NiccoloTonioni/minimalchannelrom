# A Hybrid Generative Reduced-Order Model for the Minimal Flow Unit

This repository contains the source code of the project website for the paper
**"A Hybrid Generative Reduced-Order Model for the Minimal Flow Unit"**.

- Paper: *International Journal of Heat and Fluid Flow* 122, 110784 (2026). https://doi.org/10.1016/j.ijheatfluidflow.2026.110784
- arXiv: https://arxiv.org/abs/2606.09044
- Code: https://github.com/NiccoloTonioni/minimal_channel_generative_code

The framework couples a β-VAE-GAN, which compresses near-wall turbulence at y<sup>+</sup> = 14 in a Minimal Flow Unit
(Re<sub>τ</sub> = 200) into a four-dimensional latent space, with a sensor-conditioned Transformer
(Easy Attention + AdaLN-Zero) that forecasts the latent dynamics from three point sensors over 17,241 t<sup>+</sup>.

## Citation

If you find this work useful, please cite:

```bibtex
@article{tonioni2026minimal,
  author  = {Tonioni, Niccol{\`o} and Agostini, Lionel and Sanchis-Agudo, Marcial and Umair, Mohammad and Kerherv{\'e}, Franck and Cordier, Laurent and Vinuesa, Ricardo},
  title   = {A Hybrid Generative Reduced-Order Model for the Minimal Flow Unit},
  journal = {International Journal of Heat and Fluid Flow},
  volume  = {122},
  pages   = {110784},
  year    = {2026},
  doi     = {10.1016/j.ijheatfluidflow.2026.110784}
}
```

## Related work

- **VIVALDy**: A hybrid generative reduced-order model for turbulent flows, applied to vortex-induced vibrations.
  *Phys. Rev. Fluids* 11, 044902 (2026). [Website](https://vivaldy.github.io) · [DOI](https://doi.org/10.1103/t7d2-mv5c)

## Website structure

```
index.html              single-page site
static/css/index.css    custom styles (appended below the Nerfies template styles)
static/js/index.js      navbar, video sync, compression comparison slider
static/images/          figures (static/images/compression/ holds the slider images)
static/videos/          MP4 animations
```

## Website license

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
This website is based on the [Nerfies website template](https://nerfies.github.io) and is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
