<template>
    <div class="text-h1">Главная страница админ панели</div>


  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
          .v-col-2
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>



  <v-container class="bg-surface-variant">
    <v-row justify="start">
      <v-col
        v-for="k in 2"
        :key="k"
        cols="4"
      >
        <v-sheet class="pa-2 ma-2">
          .justify-start
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="k in 2"
        :key="k"
        cols="4"
      >
        <v-sheet class="pa-2 ma-2">
          .justify-center
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col
        v-for="k in 2"
        :key="k"
        cols="4"
      >
        <v-sheet class="pa-2 ma-2">
          .justify-end
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col
        v-for="k in 2"
        :key="k"
        cols="4"
      >
        <v-sheet class="pa-2 ma-2">
          .justify-space-around
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col
        v-for="k in 2"
        :key="k"
        cols="4"
      >
        <v-sheet class="pa-2 ma-2">
          .justify-space-between
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>




  <div>
    <v-container
      class="bg-surface-variant mb-6"
    >
      <v-row
        align="start"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2">
            .align-start
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="bg-surface-variant mb-6"
    >
      <v-row
        align="center"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2">
            .align-center
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      class="bg-surface-variant mb-6"
    >
      <v-row
        align="end"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-sheet class="pa-2 ma-2">
            .align-end
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="bg-surface-variant">
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <v-col align-self="start">
          <v-sheet class="pa-2 ma-2">
            .align-self-start
          </v-sheet>
        </v-col>

        <v-col align-self="center">
          <v-sheet class="pa-2 ma-2">
            .align-self-center
          </v-sheet>
        </v-col>

        <v-col align-self="end">
          <v-sheet class="pa-2 ma-2">
            .align-self-end
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>