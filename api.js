//------------------Index Page First News Start-------------------------------//
var k;
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let i = 0, j = 1;
    while (i < j) {
      if (data.articles[i].urlToImage != null) {
        $('#main-headline-img1').attr("src", data.articles[i].urlToImage);
        $('#main-headline-title1').text(data.articles[i].title);
       $('#tag1').attr("href",data.articles[i].url);
        $('#main-headline-source1').text(data.articles[i].source.name);
        i++;
      }
      else {
        i++;
        j++;
      }

    }
    k = j;
  },
  error: function (jqXHR, textStatus, errorThrown) {
    alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
  }
})

//------------------Index Page First News End-------------------------------//


//-----------index latest news start--------------//

$.ajax({
  url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 3;
    for (let i = 0; i < j; i++) {
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      $('#latest-news').append(`
                    <div class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                        <div class="pr-3">
                            <h5 ><a class="text-white" href="${data.articles[i].url}">
                            ${data.articles[i].title.substring(0,40)}</a></h5>
                            <div class="fs-12">
                                <span class="mr-2" >${data.articles[i].source.name}</span>10 Minutes ago
                            </div>
                        </div>
                        <div class="rotate-img">
                            <img   src=${data.articles[i].urlToImage} alt="thumb" class="img-fluid img-lg"  />
                        </div>
                    </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),

  //-----------index latest mews end--------------//


  //-------------Center 3 News Start---------------//

  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {
      let j = 3 + k;
      for (let i = k; i < j; i++) {
        //Main Page
        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        // var k = j;
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);

        $('#home1').append(`
        <div class="row">
        <div class="col-sm-4 grid-margin">
          <div class="position-relative">
            <div class="rotate-img">
              <img src="${data.articles[i].urlToImage}" alt="thumb" class="img-fluid" />
            </div>
            <div class="badge-positioned">
              <span class="badge badge-danger font-weight-bold" style="background-color: black;">Flash news</span>
            </div>
          </div>
        </div>
        <div class="col-sm-8  grid-margin">
          <h2 class="mb-2 font-weight-600">
          <a class="text-dark" href="${data.articles[i].url}">
          ${data.articles[i].title}</a>
          </h2>
          <div class="fs-13 mb-2">
          <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
          </div>
          <p class="mb-0">
              ${data.articles[i].description}
          </p>
        </div>
      </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //----------center 3 news end-----------//

  //-------bitcoin Start --//
  $.ajax({
    url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {
      let j = 4;
      for (let i = 0; i < j; i++) {
        //Main Page
        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
       

        $('#bitcoin').append(`
        <div class="d-flex justify-content-between align-items-center border-bottom pb-2">
                        <div class="div-w-80 mr-3">
                          <div class="rotate-img">
                            <img src=${data.articles[i].urlToImage} alt="thumb" class="img-fluid" />
                          </div>
                        </div>
                        <h3 class="font-weight-300 mb-0">
                        <a href="${data.articles[i].url}"> ${data.articles[i].title.substring(0,50)}</a>
                        </h3>
                      </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //-------bitcoin end --//

  //-------------Spotlight start--------------------------//

  //-------------Spotlight1 --------------------------//
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {
      let i = 0, j = 1;
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);
      while (i < j) {
        if (data.articles[i].urlToImage != null) {
          $('#spotlight1-img').attr("src", data.articles[i].urlToImage);
          $('#spotlight1-title').text(data.articles[i].title.substring(0,20));
          $('#spotlight1-time').text(newdate);
          $('#spotlight1-source').text(data.articles[i].source.name);
          $('#spotlight1-des').text(data.articles[i].description.substring(0,100));
          $('#spotlight1-link').attr("href", data.articles[i].url);
          i++;
        }
        i++;
        j++;
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert('Error Occured: ' + textStatus + ' - ' + errorThrown);
    }
  }),
  //-------------Spotlight2 start -------------------------//

  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {
      for (let i = 0; i < 3; i++) {

        $('#spot2').append(`
        <div class="border-bottom pb-3 mb-3">
        <h3 class="font-weight-600 mb-0">
          <a class="text-dark" href="${data.articles[i].url}"> ${data.articles[i].title.substring(0,20)}</a>
        </h3>
        <p class="fs-13 text-muted mb-0">
        <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
        </p>
        <p class="mb-0">
        ${data.articles[i].description.substring(0,40)}
        </p>
      </div>
        `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),

  //-------------Spotlight2 end--------------------------//

  //-----Apple News start---//
  $.ajax({
    url: "https://newsapi.org/v2/everything?q=apple&from=2021-12-01&to=2021-12-07&sortBy=popularity&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 4;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#apple').append(`
      <div class="row">
      <div class="col-sm-12">
        <div class="border-bottom pb-3 pt-3">
          <div class="row">
            <div class="col-sm-5 pr-2">
              <div class="rotate-img">
                <img src=${data.articles[i].urlToImage} alt="thumb"
                  class="img-fluid w-100" />
              </div>
            </div>
            <div class="col-sm-7 pl-2">
              <p class="fs-16 font-weight-600 mb-0">
              <a class="text-dark" href="${data.articles[i].url}">${data.articles[i].title.substring(0,10)}</a>
              </p>
              <p class="fs-13 text-muted mb-0">
              <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
              </p>
              <p class="mb-0 fs-13">
              ${data.articles[i].description.substring(0,20)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
                `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //---Apple news end---//

  //---Tesla start -----//
  $.ajax({
    url: "https://newsapi.org/v2/everything?q=tesla&from=2021-12-01&sortBy=publishedAt&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 2;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#tesla').append(`
        <div class="border-bottom pb-3">
        <div class="rotate-img">
          <img src=${data.articles[i].urlToImage} alt="thumb" class="img-fluid" />
        </div>
        <p class="fs-16 font-weight-600 mb-0 mt-3 ">
        <a class="text-dark" href="${data.articles.url}">${data.articles[i].title.substring(0, 30)}</a>
        </p>
        <p class="fs-13 text-muted mb-0">
        <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
        </p>
      </div>
                `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),

  //---Tesla end -----//

  //-------------Spotlight end--------------------------//













  //--------------------------Health Page Starts---------------------------------------------------

  //main Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=health&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {
      let j = 6;
      for (let i = 0; i < j; i++) {
        //Main Page
        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        // var k = j;
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);

        $('#health-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 4;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#health-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=health&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 4;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#health-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })

//--------------------------health Page Ends---------------------------------------------------




//--------------------------Business Page Starts---------------------------------------------------


//main Page
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 6;
    for (let i = 0; i < j; i++) {
      //Main Page
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      // var k = j;
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#bus-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 4;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#bus-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=business&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 4;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#bus-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })

//--------------------------Business Page Ends---------------------------------------------------




//--------------------------Sports Page Starts---------------------------------------------------


//main Page
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 6;
    for (let i = 0; i < j; i++) {
      //Main Page
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      // var k = j;
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#sports-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#sports-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=sports&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#sports-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a href="${data.articles[i].url}">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a></a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })


//--------------------------Sports Page Ends---------------------------------------------------


//-------------------Entertainment news start---------------------------------------------//


//main Page
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 6;
    for (let i = 0; i < j; i++) {
      //Main Page
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      // var k = j;
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#enter-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#enter-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#enter-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a href="${data.articles[i].url}">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a></a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })


//-------------------Entertainment news end---------------------------------------------//

//--------------------------Science Page start---------------------------------------------------


//main Page
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=science&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 6;
    for (let i = 0; i < j; i++) {
      //Main Page
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      // var k = j;
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#science-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#science-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=science&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#science-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a href="${data.articles[i].url}">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a></a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })


//-------------------Science news End---------------------------------------------//

//-----------------------Technology Page Start----------------------------------------//


//main Page
$.ajax({
  url: "https://newsapi.org/v2/top-headlines?category=technology&country=in&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {
    let j = 6;
    for (let i = 0; i < j; i++) {
      //Main Page
      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      // var k = j;
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#tech-main').append(`
                    <div class="row">
                        <div class="col-sm-4 grid-margin">
                          <div class="rotate-img">
                            <img
                              src="${data.articles[i].urlToImage}"
                              alt="banner"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                        <div class="col-sm-8 grid-margin">
                          <h2 class="font-weight-600 mb-2">
                          <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                          </h2>
                          <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                          </p>
                          <p class="fs-15">
                          ${data.articles[i].description}
                          </p>
                        </div>
                      </div>
                    `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
}),
  //Latest Page
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#tech-latest').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  }),
  //Trending Worldwide 
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?category=technology&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
    success: function (data) {

      let j = 5;
      for (let i = 0; i < j; i++) {

        if (data.articles[i].urlToImage == null) {
          console.log("Null Image Occur");
          j++;
          continue;
        }
        //time
        date = new Date(data.articles[i].publishedAt);
        newdate = date.toLocaleTimeString();
        console.log(newdate);
        $('#tech-trending').append(`
                    <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                            <a href="${data.articles[i].url}">
                            <a class="text-dark" href="${data.articles[i].url}">
                            ${data.articles[i].title}</a></a>
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                            <span class="mr-2">${data.articles[i].source.name} </span>${newdate}
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="${data.articles[i].urlToImage}"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `)
      }
    },
    error: function () {
      alert("Some Error Occured");
    }
  })



//-----------------------Technology Page End----------------------------------------//

//-----------------------------Bottom newsw start---------------------------------------//

$.ajax({
  url: "https://newsapi.org/v2/everything?domains=wsj.com&language=en&apiKey=bc228f55b3834138b6c34f0dfde3ce89",
  success: function (data) {

    let j = 3;
    for (let i = 0; i < j; i++) {

      if (data.articles[i].urlToImage == null) {
        console.log("Null Image Occur");
        j++;
        continue;
      }
      //time
      date = new Date(data.articles[i].publishedAt);
      newdate = date.toLocaleTimeString();
      console.log(newdate);

      $('#bottomnews').append(`
      <div class="row border-bottom">
      <div class="col-sm-12">
        <div>
          <div class="row">
            <div class="col-3">
              <img src="${data.articles[i].urlToImage}" alt="thumb" class="img-fluid" />
            </div>
            <div class="col-9">
            <a class="text-white" href="${data.articles[i].url}">
            ${data.articles[i].title}</a></a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
                `)
    }
  },
  error: function () {
    alert("Some Error Occured");
  }
})



//-----------------------------Bottom newsw Ends---------------------------------------//