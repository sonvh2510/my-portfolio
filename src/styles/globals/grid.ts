import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS_UP } from "..";

export const GridStyles = createGlobalStyle`
  .container,
  .container-fluid {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: ${BREAKPOINTS_UP.sm}) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.md}) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.lg}) {
    .container {
      max-width: 990px;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.xl}) {
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.xxl}) {
    .container {
      max-width: 1320px;
    }
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-left: calc(var(--bs-gutter-x) * -0.5);
  }

  .row > * {
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
  }
  .g-0 {
    --bs-gutter-x: 0;
  }

  .col {
    flex: 1 0 0%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.33333333%;
  }

  .offset-2 {
    margin-left: 16.66666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333333%;
  }

  .offset-5 {
    margin-left: 41.66666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333333%;
  }

  .offset-8 {
    margin-left: 66.66666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333333%;
  }

  .offset-11 {
    margin-left: 91.66666667%;
  }

  @media (min-width: ${BREAKPOINTS_UP.sm}) {
    .col-sm {
      flex: 1 0 0%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-sm-0 {
      margin-left: 0;
    }

    .offset-sm-1 {
      margin-left: 8.33333333%;
    }

    .offset-sm-2 {
      margin-left: 16.66666667%;
    }

    .offset-sm-3 {
      margin-left: 25%;
    }

    .offset-sm-4 {
      margin-left: 33.33333333%;
    }

    .offset-sm-5 {
      margin-left: 41.66666667%;
    }

    .offset-sm-6 {
      margin-left: 50%;
    }

    .offset-sm-7 {
      margin-left: 58.33333333%;
    }

    .offset-sm-8 {
      margin-left: 66.66666667%;
    }

    .offset-sm-9 {
      margin-left: 75%;
    }

    .offset-sm-10 {
      margin-left: 83.33333333%;
    }

    .offset-sm-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.md}) {
    .col-md {
      flex: 1 0 0%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-md-0 {
      margin-left: 0;
    }

    .offset-md-1 {
      margin-left: 8.33333333%;
    }

    .offset-md-2 {
      margin-left: 16.66666667%;
    }

    .offset-md-3 {
      margin-left: 25%;
    }

    .offset-md-4 {
      margin-left: 33.33333333%;
    }

    .offset-md-5 {
      margin-left: 41.66666667%;
    }

    .offset-md-6 {
      margin-left: 50%;
    }

    .offset-md-7 {
      margin-left: 58.33333333%;
    }

    .offset-md-8 {
      margin-left: 66.66666667%;
    }

    .offset-md-9 {
      margin-left: 75%;
    }

    .offset-md-10 {
      margin-left: 83.33333333%;
    }

    .offset-md-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.lg}) {
    .col-lg {
      flex: 1 0 0%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-lg-0 {
      margin-left: 0;
    }

    .offset-lg-1 {
      margin-left: 8.33333333%;
    }

    .offset-lg-2 {
      margin-left: 16.66666667%;
    }

    .offset-lg-3 {
      margin-left: 25%;
    }

    .offset-lg-4 {
      margin-left: 33.33333333%;
    }

    .offset-lg-5 {
      margin-left: 41.66666667%;
    }

    .offset-lg-6 {
      margin-left: 50%;
    }

    .offset-lg-7 {
      margin-left: 58.33333333%;
    }

    .offset-lg-8 {
      margin-left: 66.66666667%;
    }

    .offset-lg-9 {
      margin-left: 75%;
    }

    .offset-lg-10 {
      margin-left: 83.33333333%;
    }

    .offset-lg-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.xl}) {
    .col-xl {
      flex: 1 0 0%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xl-0 {
      margin-left: 0;
    }

    .offset-xl-1 {
      margin-left: 8.33333333%;
    }

    .offset-xl-2 {
      margin-left: 16.66666667%;
    }

    .offset-xl-3 {
      margin-left: 25%;
    }

    .offset-xl-4 {
      margin-left: 33.33333333%;
    }

    .offset-xl-5 {
      margin-left: 41.66666667%;
    }

    .offset-xl-6 {
      margin-left: 50%;
    }

    .offset-xl-7 {
      margin-left: 58.33333333%;
    }

    .offset-xl-8 {
      margin-left: 66.66666667%;
    }

    .offset-xl-9 {
      margin-left: 75%;
    }

    .offset-xl-10 {
      margin-left: 83.33333333%;
    }

    .offset-xl-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: ${BREAKPOINTS_UP.xxl}) {
    .col-xxl {
      flex: 1 0 0%;
    }

    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }

    .offset-xxl-0 {
      margin-left: 0;
    }

    .offset-xxl-1 {
      margin-left: 8.33333333%;
    }

    .offset-xxl-2 {
      margin-left: 16.66666667%;
    }

    .offset-xxl-3 {
      margin-left: 25%;
    }

    .offset-xxl-4 {
      margin-left: 33.33333333%;
    }

    .offset-xxl-5 {
      margin-left: 41.66666667%;
    }

    .offset-xxl-6 {
      margin-left: 50%;
    }

    .offset-xxl-7 {
      margin-left: 58.33333333%;
    }

    .offset-xxl-8 {
      margin-left: 66.66666667%;
    }

    .offset-xxl-9 {
      margin-left: 75%;
    }

    .offset-xxl-10 {
      margin-left: 83.33333333%;
    }

    .offset-xxl-11 {
      margin-left: 91.66666667%;
    }
  }

`;

export default {
  GridStyles,
};
