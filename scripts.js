const container = document.querySelector("#certificate-container");
const button = document.querySelector("#rep");

const downloadPdf = () => {
const html = `
  <div id="element" class="bg-[url('plant.jpg')]  p-6">
  <div class="container_content bg-white" id="container_content">
	  <div class="container h-100" id="container">
        <div class=" row h-100 justify-content-center align-items-center ">
            <div class="col-10 col-md-10 col-lg-8 bg-light ">
                <h1 style="color:green ;font-size: xx-large;text-align:center;">Grow My Tree </h1>
				<h1 style="text-align:center;">Loreum Ipseum</h1>
				<h6 style="color:green ;text-align: center;">John Doe</h6>
				<p style="color:green ;text-align: center;">Tree<span style="text-transform:capitalize;font-size: 30px;font-weight: bolder; ">1 Baum</span> Ipsum</p>
                
                <div class="grid-container" style="display:grid;grid-template-columns: auto auto auto;padding:20px;">
                    <div class="grid-item" style="padding:10px;text-align: left;">
                        <p style="margin-bottom:10px;">
                          Sed ut perspiciatis unde omnis iste natus error sit totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
  
                    </p>
                   
                <p style="margin-bottom:10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore voluptate velit esse </p>
                  </div>
                  <div class="grid-item" style="padding:10px;text-align: left;">
                    <p style="margin-bottom:10px;">
                        Sed ut perspiciatis unde omnis iste natus error sit totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
    
                  </p style="margin-bottom:10px;">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit "</p>
                  </div>
              </div>
              <div class="" style="display: flex; flex-direction: row;justify-content: space-between;margin:1% 4% 1% 4%">
                  <div >
                      <p>Loreum Ipseum</p>
                      <p >Loreum Ipseum</p>

                  </div>
                  <div class="">
                    <p>Loreum Ipseum</p>
                    <p>Loreum Ipseum</p>

                  </div>

              </div>
            </div>
        </div>
    </div>
</div> 
        
      </div>
  `;
        container.innerHTML = html;
        html2pdf().set(opt).from(element).save();
};

const opt = {
  filename: "certificate.pdf",
  image: { type: "jpg", quality: 0.98 },
  html2canvas: {
    scale: 1,
  },
  jsPDF: {
    unit: "px",
    format: [598, 760],
    hotfixes: ["px_scaling"],
    orientation: "portrait",
  },
};


