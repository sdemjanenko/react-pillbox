/** @jsx React.DOM */

var ReactTestUtils = React.addons.TestUtils;

describe('Pill Box Component', function() {
  it('all classes should be defined', function() {
    expect(PillBox).toBeDefined();
    expect(pillbox.PillBox).toBeDefined();
    expect(pillbox.Pill).toBeDefined();
    expect(pillbox.PlaceholderPill).toBeDefined();
    expect(pillbox.PrescriptionList).toBeDefined();
    expect(pillbox.PrescriptionItem).toBeDefined();
  });

  describe('pill box', function() {
    var pillbox;

    describe('default pill box', function() {
      beforeEach(function() {
        pillbox = ReactTestUtils.renderIntoDocument(<PillBox/>);
      });

      it('should have correct default props', function() {
        expect(pillbox.props.name).toBe('pillbox');
        expect(pillbox.props.pills).toEqual([]);
        expect(pillbox.props.autoFocus).toBeTruthy();
        expect(pillbox.props.numSuggestions).toBe(5);
      });
    });

    describe('initialise pill box with no preselect', function() {
      beforeEach(function() {
        pillbox = ReactTestUtils.renderIntoDocument(<PillBox pills={pillsNoPreselect}/>);
      });

      it('should have no selected pills', function() {
        expect(pillbox.getAllSelectedPills().length).toBe(0);
      });
    });
  });
});