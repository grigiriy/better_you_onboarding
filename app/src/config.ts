import { defineConfig } from '@tok/generation';

import ActionSlide from './custom/ActionSlide.vue';

const imageStyle =
  'left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: initial';

export default defineConfig({
  theme: 'dark',
  definePresets: {
    action_slide: ActionSlide,
  },
  currencyConfig: {
    align: 'right',
  },
  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Здарова, ебать!',
          description:
            "Это наш онбординг, пока на минималках, но дальше буду на картинки переделывать, как в аи фешне",
          button: 'Заебись!',
        },

        {
          extends: 'action_slide',
          title: 'Re-dress photos with AI',
          description: 'Tap the button below to try',
          actionButton: ['Re-dress', 'Applied'],
          nextButton: 'Next',
          media: [
            {
              type: 'image',
              src: import('./assets/img/1_init.webp'),
              style: imageStyle,
            },
            {
              type: 'image',
              src: import('./assets/img/1_res.webp'),
              style: imageStyle,
            },
          ],
        },

        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Я его выплюнул на бесплатный сервак сейчас',
          description:
            "И я хз, всегда ли он онлайн, если да - заебись, если нет - придется подрочиться с конфигом для своего",
          button: 'Понял, я заебался!',
        }
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Плати, ебать',
      list: [
        'Но платежки я не подрубал еще, попозжа',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Держи {price}, делай заебись!',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
