const CancellationPolicy = () => {
    return (
        <div className="bg-gray-900 w-full py-6">
      <div className="p-8 max-w-3xl mx-auto  mt-20 text-white  rounded-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center">Order Cancellation & Refunds</h2>
        
        <section className="mt-4">
          <h3 className="text-2xl font-semibold mb-1"> Non-Cancellable & Non-Refundable</h3>
          <p>Orders are generally non-cancellable and non-refundable.</p>
        </section>
  
        <section className="mt-4">
          <h3 className="text-2xl font-semibold mb-1"> Cancellation Before Processing</h3>
          <p>Cancellation requests before order processing (printing, packing, or shipping) may be considered at our discretion.</p>
        </section>
  
        <section className="mt-4">
          <h3 className="text-2xl font-semibold mb-1"> Orders in Production</h3>
          <p>Orders in production cannot be canceled.</p>
        </section>
  
        <section className="mt-4">
          <h3 className="text-2xl font-semibold mb-1"> Refunds for Defective Orders</h3>
          <p>Printed orders are non-refundable unless a defect is caused by InkMudra. Defect reports must be submitted within two days of delivery for reprints or refunds.</p>
        </section>
  
        <section className="mt-4">
          <h3 className="text-2xl font-semibold mb-1"> Right to Refuse Orders</h3>
          <p>We reserve the right to refuse any order and limit sales by region.</p>
        </section>
      </div>
      </div>
    );
  };
  
  export default CancellationPolicy;
  