<template>
  <div>
    <p>{{ msg }}</p>

    <!-- 发送请求-->
    <h2>Chinoukin Test</h2>
    <ul>
      <li>
        <a @click='request11'
           href="#"
        >
          发送请求一
        </a>
      </li>
      <li>
        <a @click='request22'
           href="#"
        >
          发送请求二
        </a>
      </li>
      <li>
        <a @click='request33'
           href="#"
        >
          上传图片
        </a>
      </li>

      <li>
        <a @click='request44'
           href="#"
        >
          路由push跳转
        </a>
      </li>
      <li>
        <a @click='request55'
           href="#"
        >
          路由location.href跳转
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line camelcase,no-unused-vars
var img_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nO2dbYxWRxWAD5SvpU2BbS0VQpoAGpGlDQbWVMqaKILGWtZqKJqaWH/UACEmVqoUiTFCjEGaGsLW+kPT1IJNJEH80UggcUugZoGkpCAacQ3Z2iCVrVjTpbvbff3RvPRydz7OmTtnPu57nmSzu+9753vmzMyZM+dOaDQaDRAEQciAibEzIAiCgEUEliAI2SACSxCEbBCBJQhCNojAEgQhG0RgCYKQDSKwBEHIBhFYgiDkQwMBAMhPhJ/u7m5ju4yNjWGaj4W+vj7ncvX19ZHS2r17t1M6bW1t5HJ1d3dHb/dW/cEgK6xMaTQaMGHChKDpxYi7arqc+RbCIwIrUyZMmMAyGHVxNoUjR5omwVtVKIcU6gI/IrAyoigsiissn0LENsBzFwDlOhTyQgRWRhSFhe7vqqQ2iH3nJ3eB2+qIwEqc8oBtNBrjVgm6H1V4XdzNv8sDuhwXl0Ar51eXnyrxq1aoqQlowcyk2BkQzJQHrO1/W3jdd7rnuFZyunTKv33Hr0tPyANZYWVIeRVV/lz1POV3+W/V/z4wrdi4V3KqNGS1lT6ywkoclfkCZjWk+hz7WxUXx0qE83QQE2+IMgp+kRVW4pRPAkPqkepEHcvUiojAyoTiKqjqSsBma8Vpc0XNky9k9VQPRGAljuqUTnVKWPxf9bv4bPN0zLRqU52i+VyBldMupuVTeOn0fLLiyhPRYSWOSudSHNjFz4qrL5teynb6ZwrvY7XCHX85znL9CHkiAitDigO7PBC/+c1vwvDwMDnO9evXw5o1a4LfUQxFWXAJecIqsL7yla/AypUrOZPIgj179sD58+dZ4i4KLQCA5557DoaGhsjxLFmyBNasWTMuvrqhKpeP8i5atAg2b95cKY46cOzYMdi/fz9b/KwCa+XKlbBhw4Zxnxd1FkXdRbHTqHQMqsGE+b8YXpW+7bNiPDqFdLk8xecOHjzoLLBsFt8+LbaLqzVVeX0LM2w7+EzD1L5V0ps3bx5s2LDBW58po7qBYPpclYYqrK6+dXnHjLVsBRaA2Y7IpLPQddqq/+vSxep8TLoQjD0TFVt4Dr2SKj5O/ZJqa+tLCGN0ej5PRUP1Gd0zmLFUTstlnGGf8Q37KaGuM2A6h232oFIlvG2lo0oj1ElUHU68dAPC9yAw1RVXWin0GdNYymn7H8ysATNj2oQatmJtdkYuYMP6XF1hyanDYeAUwKa68p1u1T7DKch0urzUYRdYOkmuEmAxlphUQjdqDp3IN7HanStd1zYMPfmlON7KBFlhYRrM9Iwvg0LKttTHKs23TiREeqa65hCepnTqIqw52tCHesMWl60PlNspRHsF0WHptoPUJbPppAwTL2UF57JkLltQh56xfSreVToPn8rpYnq69uOov9RWyK59xlW/W/U01HRoUQule5NyZ6dIddvnWP2YakbArCRsx9PF73U6iCqYBDLXAFS1E1aJXDVN3f8+4g2lw/LZZ1RhMX1Y9VMcK+W2xe44dGM4xGQQ1KyhfLSqOmrVrWxMqybMrGEzYdA9S/m/nA8fA9tWNo6TLZV5AefsyZ1GWSBQ+1jVNE3/Y/qMSuhhVjW2clLGQbGNyuHKn3MS9PIzValum9F138fSfXA0GGb16Ds9zGe5poudpEJBSbcpFDBhXMvpYvYRsu6iemuwDUTsqsnV/AELVTHMfQRdF2V0XcqhInafocSt2zKn2D5BLj8X986m5e/Vq1fhzJkzIbLkzOTJk+Hee+81Lqe5Z5zQqwHfuqtXXnmFdN+xv7/fS7ohMG2Pyn3m5ZdfhpGRkaD5o3LPPffAjBkzbviMW0Vggl1gUXQ6Z86cgU9+8pPcWapEe3s7XLlyBfVszIb1ie8yPProo+Qwd9xxB9x1112kMNOmTSOn4wtM299///0wODgYKEdu9Pb2QldXFwDohXHIfh5N6a76P2dUZQlVtjrVo44vf/nLsHfv3uv/61btJkL0v5BH/KFpOR1WrAEdgljbtBhpp4CLYKhz/2sVgl1+LhLDQtYnNvsTlc1KlbRU9jK6AwefqNJNta10ecXYDPkqF9aOyfZsLsToE8m6l0kZip1W1bJRbcKqorLT4UjHNzq1Q/l71f++ykaxiUq9PjHEKEOUFVbuYGfLOsyiTVIti6tJC/cNAdvnqdZn6gT11kD5LmWws6UvYR3DcFQnCFJrM9c6DmFVb/q8FSZyDqLqsKTRcPHphAVHWk1SOBHKndSEOwehD3+irLDq3Om5jslVcXOmJVSnFeozdBmT0WG1wmwkVIPaR6RP1Y9k3vzcCrNRbqQ24Kl9RPpU/UhGYAlpULRbkgEvUKiF0t1EajN4qsSop7p6iAhNysa2vgkxwUUxHG1iM/YT3iNk3eju58Vun1//+tfwhz/8gRRm2rRpcPbsWaYc4Yhdb6EINYaDemsoE9JTYatw6tQppxl99uzZpHAdHR3BhMGzzz4Lu3btgv/+97+kcG1tbUw5EgDiLDSC+MPSIYIKB6VjfPSjH62UDgCuXdra2mDx4sXk/Llw5513ssUtuBPj6lZUgSXgCNUZUrMaF4QyQZXuqtvdOXpsCOmtQRdf8Tc1vbIXA5NXBpXSGFte13oweVmggvXW4ItWuEuoqtNQhwtBle4mT4U5zdIhvTXo4tPVGyY9W/6oHiIw13gw+VLpNH17u3DNm8/0fKcZAtVYjbEljGrpnlujpYqrBTjm2lRIY03O/hCqr+W8cjJRrL+Yu6Ko3hrqREx7G6rNVNN0oSqhXbRw4yNd02X/OhB7VxREh6VqsJwbUbcyCdGAmHrDbgtVsyYlPZvLGdeVny+BSqVq++n0VLHKw0HsXVEQgaXTk+TaiDEbzacFuso1iItDPF+uaGLoRIpU7Y/cuswUiD1mk/HWILjhW2fUyu3lo+yxBzQ3sftH1LuEsQufEyEGAtdRfytR5z5tU+3U4vIz1kVyHQYIp+I9xECgbGFCtVcd+kVdUKlxQm97o94lrNsen7sMmCswP/nJT2B0dJQ1H6E5fvy4t7hC3X+r44X+YplilS+4t4YUCu2DZt51ZYhVth/+8IcwNDQUPN1c0PU93+1l6hO59nvdAiNkeYIr3XNsKBU2W5S6lLOuxOiXOd7qwBCyPMGV7qqj9LrArZOrW32FJpbeTfRw/giudPdpR5QaddPJ1Y1Qfa+uu4oUiGqHletePgYxr/7UlVRuJtSFWpg1CH4IdfVH8Eud2sx26TlEWcVwVGhpWmkFVJUUDg2CO/Az/Z8TKkd6xe84ncLlXG8xMDkk5Bh8uvaK6ZalCrb8hlRXBHWRXCdlpM2Zma8G5LYXagViH4aY+koO2PJbK7OG3GYTHxQNBIV0yfkaVSqE7uPJeGuoy+D27eCsTqvS1MD4A6tCXfp0E5uH2lqdEmK8YNaBmOWo2wDhhluXVZc+3URXnqKjQm6CbQlVRntiW+SOqu7qNkC4Cb06qCsh+13w9xI2t0yqQk6ePBna29tDZ4nErFmzbvg/phI8VwF16623wqRJ/F2P8ubnkHXZ7DPlvpQikydPtj4TcgwEdy9jOvG699574cqVK+O+p1ZIyAoUYUXnyJEjsHz58tjZiEaz7S5cuOAtzlaZOKOeEtqW5BjltSmcL3/nKZJ6/jD4NP3gjD8FOHXAOdVfMldzXCsc6yDQZ7wpkHr+MPgqQyu4+OEsS071F11gxVS+ly2gy9/pwoSEmr+6Uuwn2LKnUkdc+VBZ8Kvqh/MWhi4dLoIr3ctwXY3AxGuygE5l1tFti1Oc/ThxOdFLpY648oG14A9l6V8LswaOvTUlzVRWSoI/WsUY2TX/uZfbRPSrOdyVa/O3XufGbXVSWWG5Ysu/yc1LyH4dMq1oKyyMdWxIP9tCenB6vKgDscdODIKtsFw6TFlZ6BJOBcZVbq6uQOoE1fbO9Flow9CUiLGL4SLYCquq0pjyvG4b6ELsmSq1zu8Tm5ChoNoGtYIhZZ37h4pkLj+r8NnwOiGmcgUjOq4w2NQFJrMTSnyhCdlnMP00lXrxQbTLz5SwXOGKdxp1R7+xGzt2+qEpt0mOTu9iOgmMRS08ju7ZswcOHjzImUQWnD59OnYWsubAgQPwi1/8ghxu6tSpcOjQIYYcjef06dOwZs2aIGmlzMDAAGv8rALr/PnzcP78ec4kBE984xvfgAceeAD9/IULF+A73/lOpTTLW2/dKuHixYtw+PBhcvwmbw2+LwtfuXLFKY8CjeiW7kIaLF68GNauXQsA9sHcaDTg1KlTldIrp6E6ueW0J4q9hRLciH6XUEgP22DmcP2s+l4OPIQyIrAyItbF61hp6hw9Cq2LCKyMiHXxOuQLGrjKiCmDrOjSRwSWYKUOL2iw2XyZnhHSQQRWZnCuAlJcYXD7bhJdWV6IwMoMzD1IH3GbnL5xuzbW5clneikZBwt4RGBlRqj7cuUBzTHAOYWvLT1ZVeWJCKzMqOtqgPutL6lcjBaqIQJLUKLyC851WhjisrnqgrsqL0LaiMDKjFCDqjjAy6sfH3koCkDM9Rwf2La1supKHxFYmRFyUJU9Jfj0nNDUixUFI3fZTKtEWV3lAeouYXd3N3c+BAWdnZ3X/1atPjhXJLq4m5/PmjXLuV80X9HejMtUrkajAQsXLnRKa8qUKTf8j3EpXKxzIT0mNDxMLaaBU2VQqbYismzX02g04Oabb4ahoSFy2N27d8O3v/1thlyFRfpINaj1F7q+nbaEuhMXnVLT9jf22oTN9bFOkYpJh3tL4Fvhq3qeo+OEtLky1RG2zlzfNIN9xtUbqgs+6oP6jMqQ1jRmfbojx+AksGyvzio+Y7LhselEbO5HbM+U06e8ZaRKpdsGkg+FbygXzlw2V7Znys9X3Q6rFPzN3xSTBy5vqNQ+g+lDKkFDbYfm/+XwlLHkE5LAMkl13QDytaoJYUdDObo3PRd6S8I906eIq4Av/x/SI0ToPuPT2DeVbTZJYJWPupuf2cK4fFdMA/OsKSwW1azp6lWAKvhcr774nulTA3Oq52Ij5jKRVp3MfPcZ0+eUhQNHXrggbwmxA7pJjIL7VAS6xoMNpxI2MQWP761w1XY1qQuKk2bVFRc2zapx+wjnokKpUj+cK0Nq/3C2w8Io5rBxVDmyd91yugwk24GB6xbXtkIINYu5lqVJFd0cdeJr9o8qK1nX513VHj77DCafpjgo4WyKeNNnmLgpoASWqXC2FQJWgan7TpUP23MuikUMtgMDSpzlcCqBTVGUNsNUpViukMt96hYcuw2mKIuxz1NWL1x9xhQnJg5fOsDyZ9x9BiWwqNtAX8+4KtqpAz02GEGMnQmrUHUb4QNdmq4DwWVgyuGFHVc9XVXIW0LsVq3Z8FX2v9yFd1HWxiIX4ZsSvvWiKeFTX5ha2Uw4K91N38de4VCWxykIgqpK3lag6ha+arjU2sJnHkPWbVUqX35W6bdSOfGqQk6zjiC0CqjLz9OnT+fOx3WWLVsGL730EilMR0cH9Pf3k9P61re+BT/+8Y+V3/kUtA888AAcOXLEW3wmXO4RunD69GlYuXJlkLRcaWtrgytXrpDCPPTQQ/D73/+eKUd++MEPfgDf/e530c//+c9/hmXLljHm6Ea+9rWvwTPPPMMSN0pghRoEAADXrl27/jdWX3bt2jWnPI6MjGi3r6bPm9tezInThAkT4J133glah/39/TBz5kxSGNVr3U1b+7GxsaBlCsXw8HDy5RodHb3+N+ZgqtFoBC3T8PAw6jkXe8mWf1W97lTIplfiMp3wwcyZM6+7cKlCrtv5ViLnNnLJe9IO/EIdMbfKUbYvcxRBiEXSAsvnFRsbOc9UWFJeFQoChqQFVgyqXnwVBAGHy5hKWmCFnO1ttmOy8hCEarjeXCmStMDSwbHacbkKU+X5EKSYJ4GHVmnrpAVWqPtKplNCbEdIcQXm455YqwyE3Emx/5XxkcekBVZMYl8vikX5oKPqylOISwrt5TMPSQqs0MIih7tjvnFdvda9XuqA7ppcLHzmIUmBZSpgStuV2OlXIYWOLPCQatuaTuCxYylJgaWiWaiULlbHTt+GzUSD4o8sZ+EsxAF7bYjiNSW5qzkXL16ETZs2kcK88cYbTmkdPXqUnNb06dNh165dTumFYsuWLTB16lRSmAcffBA+/elP3/BZSpODC8PDw+T2PXPmDFNu/HHo0CF4/fXX0c8PDg4y5mY8f/rTn8j1DgCwd+9e6zOoNz/n0Fm3bNkCd955J/r5I0eOwIsvvkhOp729newB4MCBA3Dx4kVyWi5873vfg5GREXI46pufL126BPv27SOns2vXLrh06RI53Cc+8Qn40pe+hH5+aGgIvv/975PTAQB4+OGHYenSpU5hKWzfvh3efvtt9nQAAG677TZ44oknSGGeeuopGBgYYMrReFCr+AYCAEj+5+zZs42xsTFl/oufN//esWOHUzrt7e2YKkOjy7Nr2La2Nqdy7d69u0ox0HR0dDjlb+PGjaR0BgcHnfvS/v37x8VXpZ10tLe3BxsfCxYs0OZDV7bly5cHHcMYstFhUWiUlHi+LzeX41d9X35WF6bK6jXGyreh0X/pymerq6rpl+vWV1rleDB1XW73cv581oNPcthBNUlOh1UFk87F9W0htnQ4w6hoBLwQrkpT9UISk9LUd15tb57xlV7VNvbZ32KQqnCt5Qordicp+7U3GV9SO0ZKb7KxfRcCrvQpq2jKd7kQu1111FJghcC2BcEO8iodow4DI1VsR+2U71TbWMGNWgqs8uxYZUWjA7PkL+tWdDoOVR4x+ee6U2laXVA/t8Xnkr+Q6PRytr+L6LbTMchdWNZSYAHw6zio6GZsm05G9T8Xxby4uo4uY9NxpY7t2lZudy0x+U25DLUUWLEGB+VkqfidapZOwS+XS1oup2tVSWmApS7AMO2T8uRSS4EVA93pHbXxsc/HGgi2dDk7O1aIx6qbHAY/9p5uqtROYIWudN2KiJIPqo0PNowLGIFksrlKAZ91w1GmVOqpDNUHXAxqJ7B8G4li0qN8TsW2RfQNJh2TPo7jgCMmHPWewqpLZfjbJIX86aiV4WgTzgofHR2FkydPssVflbGxMeewPoSjTiHtw+C1GAenAW1/f3+QNi6+EDU0poOdGMbJWFgF1pw5c6C9vZ0zievovBPoZo4PfOAD0NHRQUpjdHQU/vKXv0BnZ6dbJgOxaNEiuOmmm0hhbr/9dgCwn/bZPtPh84aBLd2qK7tt27bBtm3bKsWB5SMf+QhMmoQfhpcuXYJ///vfzulh2qz5/cKFC8lvjB4cHCR5kiDTQACOlxl7enpYLo3G4rXXXgt6GdT1Z3Bw0LmM3O2Vw+XnkD+vvfYaqVyPPfaYUzqmy88+6enpca4LDOw6rJCKvGYa5bRc0m7UTBdTRlcmH9s2gY7UGw52gdVojPcUinm+/BkGnSWxaZuDGbip7uexqOrTdn1EF9YGZ13VeVCr6o2rvFXjjdkOQVZYJoGhC1P83jYIXCsQY4Fdh0GCEeBYYR+zPnKfOGyU65arvFXjjdkOQVZYOlQmCFThpgqDHVSY5+o+SMrY6kTVZph69CHofGz1U0Q3Maeywkqp3qPbYXF4NQh5cpUzqo6HtcOqGsaFWHcsuQl9Davq7Ytar7AEQRB8EeyUMCR12SpwU5cVitA6JL3CqqJMF4Rc0J3QCuOJKrBUDVT8jNuGSzqIkAK6E1phPMHssFRg3XFQG9ImCDHxijB7D1096E6OuOtN2qW1iWqHZcPUOSlmDrrPTMhs9x7YE6xQqwRpl9aG9fLzjh07oKenhzOJoMS8XR8Lyi0Fn2HL/OY3v4GXXnoJ/fy7777rJV1uVq1aRb78HIqvfvWr8Oqrr5LCDA4OMuXmPWrzqvpQ3HrrrXDkyJHY2TCydOlS6yDQXc+heGtw4dy5c+TXs+/btw+eeuqpymnXhQ0bNsAjjzxCCjNt2jRYsmSJ8jtd23Z2dgZ1pYTZ7tfSHxYnkyZNguXLl4/7HDOgi8/4XH24YNs2c+V18eLF5DDHjh3zknZdmDt3Lixbtsxbm+S0IEnarCEnMNcqypb7WIW26XtXJbTtukUqglVQ06qXzEVgMeF6stkUENg7mK4dF3PdIrSwMp0oC2Z81lvKE5QIrIio7kpS70FyDnCXjlslP80TZRFaeKjum3JHBFZCqIxmbeTSUSlCKJcypUAVs6EcEYHlAV8rgpDeWX1jc5HSSoMqVXLsV2VEYHnA92Asn9ap/qZ+ZvrcB6FdpAg4XFbtKSMCixEfjtKwJ4tFMMKjat5cnzGFq8MKIDVcHGKmjAgsRqgeJCmujE3P6GgqaF2UtBxO+kK5BBbGk2tdi8DyjGmLplsh+Z7tTJfNOZW0ri+syHXw1JHUV14isDxhUi7bjDA5dWA6ODqmCJ58yeVwRK7mELl27Ro8+eSTsbNhZOPGjTBt2jQA8Cski3FdunQJ9u3bVy2jSHp7e4OkkwvHjx8P0gdDXrTGwnr5uauri/Q6+Ndffx0OHjzolJbwPoODgzBr1izjM7bLzzY918mTJ6Gzs7N6ZpF0dHRAV1cXezovvvgi/OMf/2BPJxe6u7thzpw56OfPnj1L8qpRBLXqbyAAcHv1tO1V9eXvent7ndOSn/d/qryqvtw+5TZq/t/X1xe0TNRX1bvS3d0dvf1S+unt7SXVX/avqi/TqJldSMo0KuqpVAr61NusapmFtAn+1pzUO3ydoJpVYElZKEj/qjdR3vyccoevM75OD2MJBek3QpAtYbGjNTTKXoGPcv2W2wMTLoU2ktWTEERg6fw3qT4T/GO6kmOqe5X7m1yxCeYUBLJgJ5jSPWdPBLlTHJC2dqBcvE4B0+qxiE0w5y6QQxOrPwRTustqKh6U077yKW7q7ebzUCdVoZwisfpD8BWW7TOBH0q911XfqCqH9Mf0CX5KKKeGaaBrB8qWMRUw/Uelu5N+Rwd7SMNFVDus1LcbdUa34s2xTbCub8rK9ZzKmArYQxouol5+lg7Dw3/+8x/2NN566y32NKowNjYGV69eJYcbHh5myI3gC5TAamtrc4t80iTjJdvyFmTixInOaQnvMTQ0BPPnz4+dDSNTp06FiRNpi/vJkyeTnr969Sq0t7eTwlRh4sSJMHXqVPZ0RkZGYHR0lBxuwoQJ1z14UMC0U3EcT5o0iXcMo24cEtBdlvURF/Z7apqqS74c+E5DFV9bW1v0C7O2n76+PrY6aTI4OBi0TKtXr2YpR7l+HnvsMaf8LViwgCV/1PxXxbsOi3LM3CC6DMZ+7+L+N8RpWAxHfalThzJwknv9+M6/N4GlG+CmgW8rDIfQ4CbHPKdMK9RnK5TRF94EFsdrnmLOLq5pu3ryVP0thH/7dAxyX0Wp4GoDssCyZaT8fW6dp0nIfNfpzp5vXNpB6tAv2DZoBDAZIQssjtdDAfALCGr80unTQNohPim1gfOW0LeA8Vkpqryp4jeVwXf5MPHluhoVeMitP4QQbM5bQt0VDttpG6URXBsMW3EYq11fnQZzwJDSTCa4E6rPpEx0HZZOUNkEVPkqTgqNkIqejbLnz222rYKqrK1U/hD4qE9TO1HMmSh5QQssFzce5dMv6qrFVbjZOnwVbwU+MV3Ata1c6wzGs0fKAiyHtqKqSLBxYN0WYcKoYDUc1V2m5W5QbEViZoPicz6xpZ1Dp4+JyYtqCnD2GS5SmZxNVBZYtuVdMaMhldyY+DGzgek5XbwuecLUUSvgsl1IUbhz9ZnUoJTFx+SMuvz8xS9+ER2h4I/Ozk7YunVr7Gx4Z8uWLdY3U1cltNeFV155Jcg4OXv2LHsaTR5//HH429/+Rg73qU99CjZv3syQI6TAktfH15+HH34YPv/5z7On8/jjj0Nvby97OgAAU6ZMgWeffZYUZvfu3XDq1ClyWpcvXw42TtatW0cWjrfccsv1v7GHX3/84x/h5MmT5PzNnDnT+ozrAVxUf1gCDc5T1qVLl8L69euVrn8o2MLt3LkTBgYGqmQVzU033QTr16+3PlfM8wsvvOAksEJy9913w0MPPeRsKmPbrobYYrtaDwR/Vb3gTsiO5OpCOEV9kolUTG2oYL2susQbWscW9ZRQqA8+jr5TJ0dhVSQHN0g+8ygCSyAhBq5pkYN9ms8+IwJLuIGqHT73FUvu5Fj/siUUnOHq8Clcf8J8XifqWEYRWIIS0/WmnJTxFGPFug1wrGE0J74NokVgCUpUp0U2c4ccB3wIp3NcuLosCllO331GBFbiNBqN6z+hodrw5DbgAfLMc5Mqpg2xPOpSvlMhAitxmm/0yXVgpbbqSi0/vsHe1821P4nAErxi84cWmlZz0xPSKaUvKPmRqzkZUPYlVuXqjI88UMM0f8cQFuV6U5Gbtfv58+fhd7/7HSnMzTffDKtWrQIAtV6p6O6oan0MDAyQ8wcAsHbtWuszrAJr0aJFMG/ePM4ksuD06dNw5coVp7DlzmPrUKtWrYJ33nmHnM5dd92ljZciJFV+z4qfrVixAubMmUPOnwvFV8eb8p+TsAIAeP755+H5558nhVmwYAFcuHABANQCGiPYsRw9ehSOHj1KDodZabEKrM2bN8OGDRu033PObCnNmmvWrIHDhw87haUOsEOHDl3/u8qqCJsXKj//+c/J6ZqghEulP8Qm54OTqDosrC0M5jOMrsJl7+663/elJ3BxaKfyZlrFLXXo2/shwgl5wi6wuPxE65a0pnxQjnix7pNNacVSbrq4FMFC9Rpb9XlfefPxfKuQcr2wCyzsgOd2EWy6JIoRLth8FQWjj9mfKpirplFuB93KFWuQaFrp6p63Hb/r2oJ6ETj2CWYq5HSSGmxLiO08vlYCtnBUQZCDnoRyb8426G1Kdt1g1/2NpXwiaku7CnWwS/JBToI72JZQNfvZLLhtkh9rAe7i3iL1DqwqO0VZjtkeuwhp3d+YtLHhsVAmodQHaihS7/fBle5FAWazzXtVcAkAAAsqSURBVPG16lGlH/o5Dqp2rqrbYI5DjKortGJYSvjUByonsa5+uRBch0WZ1TB6LeppoKtSnxJfCKpunak2VS7fV42zSt3GMlTNkZzqKuopoU14ueq1bDoQDKnPOFShrHuGqnDlPiV0gaK7E8aTUz0lc5eQww6n6gydMj7y52KsSa3vEEaKnIaurUBO9RRdYGGU79xpN/8uf6cLExJq/ijYVq7FtDHbc866KfaTHPSLqZKTvkpF9MvPHNIdu3Iw6UtSmbV122LufFBP/rjz5Mtqv9XJvU7YBRalgl5++WW4//77GXNTnVmzZl2/RFoXtmzZAr/85S+DpXfkyBFYunQp+vmenh7Yvn07Y47e56233gqSjuAGu8CyrXaK34+MjMDg4CB3loQSb7/9dtB6Hx0dJT1/7dq12vaL06dPw+zZs9nTmTQp3GZq3bp18OSTT7LEHW2F1RRUuS9RBT5cDgVyY/bs2TB37tzY2fDK9OnT2coUzKwhZ0WfEIe6C6tQpDD2fB3WBDMcDa00rgspdDYuqHZbwnhyqC/TSpm6ik7m8rPgj1zq2nafMfcj+BBgjKRjLw58nixHu/ws4OC4/pIyRb2m6DjxpFhPHJNNVMNRmT15kHoVUugDHK6iknORnBspHirkUq++PDO0Chidn2pHE7Nuffs0i+JxtE6dE3NBOwap13FZ2arydVb8LdjRKbBj9k2Vjq1Km0bx1pDa4K4jqdcxxs2MCKsb0QmjHOqpPDm5CrCgW8IcKhZLrMvaKcXDQdnjaeqCNwVSXeXrsK2uTQTdEuZSoRhi6Ai43bGExLduQ0gLLjOL6N4a6kBKg2zr1q0wMjJCCnPixAmm3OhJqc5i8qMf/QhuueUWUpjPfvaz11873ySla0wnT56ELVu2kMP99Kc/tT4jAiszbB3zZz/7GQwNDZHj/dznPgcrVqxAP//Pf/4Tnn76aXI6VBqNBqxYsQJ27NhBCjc0NAQ7d+5kytV4Fi5cCF//+tdJYXbu3AnPPPMMOa1Zs2ZdF1hcd3IbjQZs2LAB1q5dSwrX19cHhw4dgnPnzpHTxAgsaCAAAKefnp6extjY2Lj4mp+Vv+vt7XVOK9RPe3s7pspuYPXq1U5pdXd3k9Nqa2tzSmv37t03tIeq3Yr09fU512FfX582ftPntjwVGRwcDNovVq9ejc5bk/b2dqe0duzYYa0vH1D6Q/OZnp4e5zrEEMUOKzclIZZG5ldJQuobqQ4Sm6sIVf2mWucp5cuWl3Lfbf7d/DyVK0BR3/yc+wAvI6da7lTpB6nWeYh8YQ9/bAKn3HfLV6RU6cUgyAortlQW8BRn1pDYBl7zM9uF6ValodFtlusFO95s9W0Kw0kQw9G6CaVyw+gaKsdBFHq7rqojF2vt1PsYts+4otsuu9ZLqpfuo24JU+9kOoqdwySQfZVPpVsIBedAK9dd1bhTniCwfcaVKnFyC1OfRFG6p1whWEKuRHQ6hBD1yOl40RY3dXua6jWV8vaKYyKr8mxRv0URfDHUB1FPCYVq1L0eKQPcRecSCq48UZThGN1fUdGOEUIxTvujvqo+xdmwCnUoT45lqKOeNBQmdUaKfSH4CqtupgxFQgwa7rqjzLBclLcatklPhBVPe5X1bro0Q24NgyvdxVaJhuuxdFVimg+UtxqYg5uYBxNlYqTvQ++kqkNTG1DayRfRXqSa08kEBd8zvs3w1ldaly5dIt3/6u/vd06rv78fpk+fTgrT3t4OH/zgB7XfxzZu/N///ke+P/fuu+86pfWvf/2LnNaUKVPgQx/6kFUANfsUVm8Yuq6DvEi1bNqvqpC6rLpClkOV1vz58+HatWukeN544w3YtWsX7Nq1ixRuypQpMG/ePFKYgYEBWL9+PSkMAMDGjRth7969xmeafSvG5HfixAno6OgIktaePXtgz549pDALFiyACxcuGJ8p1h+mH8cYs0G8NahmP2rlCDjOnj1LDrNp0ybo6ekhh/vwhz8Mr776KinMkiVLnPKIoa53VEORQ/1FUboLNHxf+K17G9S9fFzkUG/BBVZRisvqCofLVRVqfHWi7uXjIod6i2qHlUMFpYrrbJjSaZoP6np4E4sq9VlLs4Yi0rnc8XGptQ4TRl0Pb2JRpT5rcflZVlg81NkAVxB0yAorU6oY4Eq9C7kS9VX1QhxkZSvkStQXqcrAEQSBQlAdlmwPw9MK9doKZRTeIxkdlqy2eAhdr6GEh/Sd1kROCQWvxPYmIdSbZN78LMt6P3R1dZEvP1+8eNEprb///e/Q2dlJDuPCb3/7Wzh58iT6eVdPCML7PPLII2SvEJcvX2bKzXsEE1i2azgTJkyAe+65B3p7e0NlyYnJkyfHzoKRU6dOOb2qftOmTbBu3Tr083/961/h0UcfJQmRKly+fJk8GKZOnQqHDx9mytH7HD9+HJ544gmnsAcOHIDbb78d/XxPTw+88MILTmlROXfuXLD2xRLEvUzxt4kZM2ZAV1fXuM9j3DlstXuO8+fPh66uLnS529raAuSqGhMnTrzenzjb880333QO+/GPfxzmzp2LerbRaMChQ4ec0yrHlWP/Dq7Dsm39fL1breoWM/XG5NpCU174kBN1MLL10SdNL+tIqaw6ohuOml5C6iLcig0Syg91iIZOyYYtdWHuC8wqJIdBXsTk4DCHdg1m1qASJGVPpMXnXT0eNuMvOggsH4EX0y3H4dIBQzR0Dp2pbpQHd7Mv5W5SkWOemwRbYZW9BJRnL58+n5r37Kq4Y/bhvoUDzvhzWy2EoNxHOV6iIvWOJ5odFqfvbdM+3UZVN7Ecs1eoGT3nmbcKLqoHn8gNEDxRLd3rph/gwse2VdBj64eiL0yH6Ep3V1wt6KnK9ipbw5gneS7UURCm7kGznF6MAxzsdykQVWDZGojjRAO75StvKzENWSwPh66DG2x+U+/URVL3oAkAwftMlV1PbKIKLFUDuRzflwUfx4DCnlqqTpZ8EkNYpGRSUUd0p5ExiZ2+jmhKd6qdlW0l5sNXuclui0KxA/oe3DGERd0EFGZLZOufvgd0uc/E1lum2uasV3OOHTvGGX02DAwMsMTr83rFiRMnSNdtXC9Mh2R0dBSefvppcrjPfOYzsHDhQuMzvur9ueeegxkzZqCfP3PmjJd0c4VVYO3fvx/279/PmURLUDawrWp6oeLAgQNw4MABb/GZ+MIXvgC33XYbaxrDw8Owb98+2LhxIzns/v37rwss1aSgMnh2ZevWreQwH/vYx+Duu+8mhbnjjjsAIMwdwoULF8J9993HEncy7mUEPakuz13Zvn07LFu2THufTVdeymB78803Yd++fZXyCWA3aI7RNg8++CBs27bNKaxJ+Jo+o3DffffBr371K+fwJrI1a2hV6iK8dOWIcdG9lcAcoKTspVYEVqbUYZBSbeGwQq4OdcNFDKt6W7wUASkCKxPqaFqALQO1rD7rJnXhZzvVpOTfl15OFa+P/AGIwEoeLvMIAUfq9V48gDF5LyljugHAUWZq/nSIwEqc1AdMSLiNg+sKRk9V/D9lmy8RWELSqGZ+2ylWqAGXo9DE5NnXJOnLELuICCwhaVxOsUKtSnNc/YbMM8cJpAisjMhxRhfikUt/ER1WTclxRqcQ25FeHSieGmIV7rERHVbNSa3DuUI11UhRYKfWFuVrW7kZhtoQgZUhKQ5cKi7XP6o446OCjTuVtqDUTYxTQF9tJwJLiEIVf/tV4nBNK3UodZOCiyJnB5yN1Na0giAIGmSFJQhCNojAEgQhG0RgCYKQDSKwBEHIBhFYgiBkgwgsQRCyQQSWIAjZIAJLEIRs+D83+K9cHg3xFgAAAABJRU5ErkJggg=='

export default {
  name: 'fview',
  data () {
    return {
      msg: 'Welcome to a new view'
    }
  },
  methods: {
    request22: function () {
      // eslint-disable-next-line no-undef
      axios.get('/api/env')
        .then(response => (alert('请求成功!, 返回的内容是：' + JSON.stringify(response))))
        .catch(function (error) { // 请求失败处理
          console.log(error)
        })
    },
    request33: function () {
      var form = new FormData()
      form.append('file', dataURLtoFile(img_base64, 'img0.jpg'))
      var config = {
        method: 'post',
        url: '/api/upload',
        // headers: {
        //   Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJNeSBqd3QgdXNlIGZvciB3YmZjIHNlY3VyaXR5IiwidXNlcl9uYW1lIjoiemhhbmdzYW4iLCJpc3MiOiJ1c2VyIiwiZXhwIjoxOTEzNzg5Mzg0LCJpYXQiOjE1OTg0MjkzODQsImF1dGhvcml0aWVzIjpbIlJPTEVfdXNlciIsIlJPTEVfYWRtaW4iXSwiY2xpZW50X2lkIjoiY2xpZW50IiwianRpIjoiMzAwMSJ9.JkGi1EMImr7ylAM6w6xee-KzcQB88se3M4wYfy6TG2vEj6i_uDa0SAh2CY-ESB3kM0pkE072icvF9DMGVc5Z2_0CBTI8lPE0vOI2Zzn8sP63j39cTPzvhYq5Qawuld_u9NOY9EFsQesc3Szrj_NUTJhBPVp5Y2eN0KCfSm6feAk',
        // },
        data: form
      }

      // eslint-disable-next-line no-undef
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
          alert('请求成功!, 返回的内容是：' + JSON.stringify(response))
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    request44: function () {
      console.log(this.$router)
      // eslint-disable-next-line camelcase,no-unused-vars
      var routes_str = ''
      this.$router.options.routes.forEach(function (ele) {
        console.log(ele.path)
        // eslint-disable-next-line camelcase
        routes_str += ele.path + ','
      })

      console.log(routes_str)
      console.log(routes_str.indexOf('/about'))
      // eslint-disable-next-line eqeqeq
      if (routes_str.indexOf('/about') != -1) {
        this.$router.push('/about')
      }
    },
    request55: function () {
      window.location.href = window.location.origin + '/about'
    }
  }
}

// eslint-disable-next-line no-unused-vars
function dataURLtoFile (base64, filename) { // 将base64转换为文件
  var arr = base64.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
