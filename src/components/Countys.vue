<template>
  <div class="countys">
    <div class="countys__container">
      <!-- <h1>hello word</h1> -->
      <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>
        <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>  <Card>
        <div class="country">
          <div class="country__bandeira">
            <img src="@/assets/bandeira.jpg" alt="" />
            <strong>Brasil</strong>
          </div>
          <div class="country__icon">
            <img src="@/assets/write.svg" alt="" />
            <img src="@/assets/close.svg" alt="" />
          </div>
        </div>
        <div class="description">
          <span><strong>Local: Balneario Camboriu </strong></span>
          <span><strong>Meta: 04/2022</strong></span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/commom/Card";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.countys {
  width: 100;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  &__container{
      width: 90%;
      display: flex;
      flex-wrap: wrap;
        justify-content: space-between;
  }
}
.country {
  width: 90%;
  height: 45%;
  margin-bottom: 5%;
  display: flex;
  &__bandeira {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 63%;
      height: 35%;
      margin-top: 10%;
    }
    strong {
      color: green;
      margin-top: 30%;
      font-size: 24px;
    }
  }
  &__icon {
    width: 50%;
    height: 100%;
    // padding: 5%;
    display: flex;
    justify-content: flex-end;
    img {
      margin: 10%;
      width: 14px;
      height: 14px;
    }
  }
}
.description {
  width: 90%;
  height: 50%;
  border-top: 1px solid #ababab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-family: sans-serif;
    font-size: 16px;
    color: #000000;
    margin-bottom: 10px;
  }
}
</style>
